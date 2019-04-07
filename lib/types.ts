export interface POJO {
  [propName: string]: POJO | any;
}

export type TransformFn = (
  value: any,
  propName?: string,
  input?: POJO | any,
  output?: POJO
) => POJO | any;

export type Transform = string | TransformMap | TransformFn;

export interface TransformMap {
  [fromPropName: string]: Transform | Transform[];
}

export type ValidateValueFn = (
  input: any,
  rules?: ValidationRules,
  options?: ValidationOptions
) => boolean;

export interface ValidationData {
  [propName: string]: any;
}

export interface ValidationOptions {
  _depth?: number;
  debug?: boolean;
  negateMatch?: boolean;
  matchAll?: boolean;
  skipMissingProps?: boolean;
  caseSensitive?: boolean;
  data?: ValidationData;
}

export interface ValidationRuleRangeOptions {
  min: number;
  max: number;
}

export type ValidationRuleTypeFn = (input: any) => boolean;

export type ValidationRule =
  | ValidationFn
  | ValidationRuleTypeFn
  | ValidationRuleRangeOptions
  | POJO;

export interface ValidationRulesObject {
  [ruleName: string]: ValidationRule;
}

export type ValidationRules = ValidationRule | ValidationRulesObject;

export interface ValidationRuleTypeFns {
  [typeName: string]: ValidateValueFn;
}

export interface ValidationMatchedRule {
  ruleName: string;
  ruleValue: any;
  input: any;
  options: ValidationOptions;
  isValid: boolean;
}

export type ValidationFn = (
  input: any,
  rules?: ValidationRules | ValidationRule | any,
  options?: ValidationOptions
) => boolean;
