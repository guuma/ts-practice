// expected to be MyAwaited<Promise<{ name: string, age: number }>>
// -> { name: string, age: number }

type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
