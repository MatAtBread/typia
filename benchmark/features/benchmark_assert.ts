import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import TSON from "../../src";
// PURE TYPESCRIPT TYPES
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArrayRecursiveUnionImplicit } from "../../test/structures/ArrayRecursiveUnionImplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";
// BENCHMARK PROGRAM
import { AssertBenchmarker } from "../internal/AssertBenchmarker";
// CLASS-VALIDATOR
import { CvArrayRecursive } from "../structures/class-validator/CvArrayRecursive";
import { CvArrayRecursiveUnionExplicit } from "../structures/class-validator/CvArrayRecursiveUnionExplicit";
import { CvArrayRecursiveUnionImplicit } from "../structures/class-validator/CvArrayRecursiveUnionImplicit";
import { CvObjectHierarchical } from "../structures/class-validator/CvObjectHierarchical";
import { CvObjectRecursive } from "../structures/class-validator/CvObjectRecursive";
import { CvObjectUnionExplicit } from "../structures/class-validator/CvObjectUnionExplicit";
import { CvObjectUnionImplicit } from "../structures/class-validator/CvObjectUnionImplicit";
// IO-TS TYPES
import { IoTsArrayRecursive } from "../structures/io-ts/IoTsArrayRecursive";
import { IoTsArrayRecursiveUnionExplicit } from "../structures/io-ts/IoTsArrayRecursiveUnionExplicit";
import { IoTsArrayRecursiveUnionImplicit } from "../structures/io-ts/IoTsArrayRecursiveUnionImplicit";
import { IoTsObjectHierarchical } from "../structures/io-ts/IoTsObjectHierarchical";
import { IoTsObjectRecursive } from "../structures/io-ts/IoTsObjectRecursive";
import { IoTsObjectUnionExplicit } from "../structures/io-ts/IoTsObjectUnionExplicit";
import { IoTsObjectUnionImplicit } from "../structures/io-ts/IoTsObjectUnionImplicit";
// ZOD TYPES
import { ZodArrayRecursive } from "../structures/zod/ZodArrayRecursive";
import { ZodArrayRecursiveUnionExplicit } from "../structures/zod/ZodArrayRecursiveUnionExplicit";
import { ZodArrayRecursiveUnionImplicit } from "../structures/zod/ZodArrayRecursiveUnionImplicit";
import { ZodObjectHierarchical } from "../structures/zod/ZodObjectHierarchical";
import { ZodObjectRecursive } from "../structures/zod/ZodObjectRecursive";
import { ZodObjectUnionExplicit } from "../structures/zod/ZodObjectUnionExplicit";
import { ZodObjectUnionImplicit } from "../structures/zod/ZodObjectUnionImplicit";

const assert = () => [
    AssertBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "io-ts": (input) => IoTsObjectHierarchical.decode(input),
            "class-validator": (input) => {
                const cla = tr.plainToInstance(CvObjectHierarchical, input);
                return cv.validateSync(cla);
            },
            zod: (input) => ZodObjectHierarchical.safeParse(input),
        },
    ),
    AssertBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "io-ts": (input) => IoTsObjectRecursive.decode(input),
            "class-validator": (input) => {
                const cla = tr.plainToInstance(CvObjectRecursive, input);
                return cv.validateSync(cla);
            },
            zod: (input) => ZodObjectRecursive.safeParse(input),
        },
    ),
    AssertBenchmarker.prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "io-ts": (input) => IoTsObjectUnionExplicit.decode(input),
            "class-validator": (input) => {
                const classes = input.map((elem) =>
                    tr.plainToClass(CvObjectUnionExplicit, elem),
                );
                return classes.map((clas) => cv.validateSync(clas));
            },
            zod: (input) => ZodObjectUnionExplicit.safeParse(input),
        },
    ),
    AssertBenchmarker.prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "io-ts": (input) => IoTsObjectUnionImplicit.decode(input),
            "class-validator": (input) => {
                const classes = input.map((elem) =>
                    tr.plainToClass(CvObjectUnionImplicit, elem),
                );
                return classes.map((clas) => cv.validateSync(clas));
            },
            zod: (input) => ZodObjectUnionImplicit.safeParse(input),
        },
    ),
    AssertBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "io-ts": (input) => IoTsArrayRecursive.decode(input),
            "class-validator": (input) => {
                const cla = tr.plainToInstance(CvArrayRecursive, input);
                return cv.validateSync(cla);
            },
            zod: (input) => ZodArrayRecursive.safeParse(input),
        },
    ),
    AssertBenchmarker.prepare(
        "array (union, explicit)",
        () => ArrayRecursiveUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "io-ts": (input) => IoTsArrayRecursiveUnionExplicit.decode(input),
            "class-validator": (input) => {
                const classes = input.map((elem) =>
                    tr.plainToClass(CvArrayRecursiveUnionExplicit, elem),
                );
                return classes.map((clas) => cv.validateSync(clas));
            },
            zod: (input) => ZodArrayRecursiveUnionExplicit.safeParse(input),
        },
    ),
    AssertBenchmarker.prepare(
        "array (union, implicit)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "io-ts": (input) => IoTsArrayRecursiveUnionImplicit.decode(input),
            "class-validator": (input) => {
                const classes = input.map((elem) =>
                    tr.plainToClass(CvArrayRecursiveUnionImplicit, elem),
                );
                return classes.map((clas) => cv.validateSync(clas));
            },
            zod: (input) => ZodArrayRecursiveUnionImplicit.safeParse(input),
        },
    ),
    AssertBenchmarker.prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "io-ts": null,
            "class-validator": null,
            zod: null,
        },
    ),
];
export { assert as benchmark_assert };
