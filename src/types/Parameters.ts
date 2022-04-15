// expected to be MyParameters<((name: string, age: number) => void)>
// => [name: string, age: number]

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer U) => any
  ? U
  : never;
