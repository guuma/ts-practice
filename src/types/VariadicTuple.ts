type Tail<T extends [any, ...any[]]> = T extends readonly [...any, infer U] ? U : never;

type Head<T extends [...any[], any]> = T extends readonly [infer U, ...any[]] ? U : never;

type TailOfArray = Tail<['banana', 'orange', 'apple']>;

type HeadOfArray = Head<['banana', 'orange', 'apple']>;
