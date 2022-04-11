//  expect to be Tail<['banana', 'orange', 'apple']> => ["orange", "apple"]
type Tail<T extends [any, ...any[]]> = T extends readonly [any, ...infer U] ? U : never;

// expect to be Head<['banana', 'orange', 'apple']> => ["banana", "orange"]
type Head<T extends [...any[], any]> = T extends readonly [...infer U, any] ? U : never;
