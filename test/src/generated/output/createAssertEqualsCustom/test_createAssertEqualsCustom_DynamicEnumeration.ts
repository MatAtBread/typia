import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_createAssertEqualsCustom_DynamicEnumeration =
  _test_assertEquals(CustomGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): DynamicEnumeration => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is DynamicEnumeration => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          false === Array.isArray(input.value) &&
          $io1(input.value, true && _exceptionable) &&
          (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
          (undefined === input.ar || "string" === typeof input.ar) &&
          (undefined === input["zh-Hans"] ||
            "string" === typeof input["zh-Hans"]) &&
          (undefined === input["zh-Hant"] ||
            "string" === typeof input["zh-Hant"]) &&
          (undefined === input.en || "string" === typeof input.en) &&
          (undefined === input.fr || "string" === typeof input.fr) &&
          (undefined === input.de || "string" === typeof input.de) &&
          (undefined === input.ja || "string" === typeof input.ja) &&
          (undefined === input.ko || "string" === typeof input.ko) &&
          (undefined === input.pt || "string" === typeof input.pt) &&
          (undefined === input.ru || "string" === typeof input.ru) &&
          (0 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                [
                  "ar",
                  "zh-Hans",
                  "zh-Hant",
                  "en",
                  "fr",
                  "de",
                  "ja",
                  "ko",
                  "pt",
                  "ru",
                ].some((prop: any) => key === prop)
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        return "object" === typeof input && null !== input && $io0(input, true);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is DynamicEnumeration => {
          const $guard = (typia.createAssertEquals as any).guard;
          const $join = (typia.createAssertEquals as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((("object" === typeof input.value &&
              null !== input.value &&
              false === Array.isArray(input.value)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "__type",
                  value: input.value,
                },
                errorFactory,
              )) &&
              $ao1(input.value, _path + ".value", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "__type",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (undefined === input.ar ||
              "string" === typeof input.ar ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".ar",
                  expected: "(string | undefined)",
                  value: input.ar,
                },
                errorFactory,
              )) &&
            (undefined === input["zh-Hans"] ||
              "string" === typeof input["zh-Hans"] ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["zh-Hans"]',
                  expected: "(string | undefined)",
                  value: input["zh-Hans"],
                },
                errorFactory,
              )) &&
            (undefined === input["zh-Hant"] ||
              "string" === typeof input["zh-Hant"] ||
              $guard(
                _exceptionable,
                {
                  path: _path + '["zh-Hant"]',
                  expected: "(string | undefined)",
                  value: input["zh-Hant"],
                },
                errorFactory,
              )) &&
            (undefined === input.en ||
              "string" === typeof input.en ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".en",
                  expected: "(string | undefined)",
                  value: input.en,
                },
                errorFactory,
              )) &&
            (undefined === input.fr ||
              "string" === typeof input.fr ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".fr",
                  expected: "(string | undefined)",
                  value: input.fr,
                },
                errorFactory,
              )) &&
            (undefined === input.de ||
              "string" === typeof input.de ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".de",
                  expected: "(string | undefined)",
                  value: input.de,
                },
                errorFactory,
              )) &&
            (undefined === input.ja ||
              "string" === typeof input.ja ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".ja",
                  expected: "(string | undefined)",
                  value: input.ja,
                },
                errorFactory,
              )) &&
            (undefined === input.ko ||
              "string" === typeof input.ko ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".ko",
                  expected: "(string | undefined)",
                  value: input.ko,
                },
                errorFactory,
              )) &&
            (undefined === input.pt ||
              "string" === typeof input.pt ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".pt",
                  expected: "(string | undefined)",
                  value: input.pt,
                },
                errorFactory,
              )) &&
            (undefined === input.ru ||
              "string" === typeof input.ru ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".ru",
                  expected: "(string | undefined)",
                  value: input.ru,
                },
                errorFactory,
              )) &&
            (0 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  [
                    "ar",
                    "zh-Hans",
                    "zh-Hant",
                    "en",
                    "fr",
                    "de",
                    "ja",
                    "ko",
                    "pt",
                    "ru",
                  ].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "DynamicEnumeration",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "DynamicEnumeration",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  );
