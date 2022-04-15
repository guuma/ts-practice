// expected to be MyParameters<((name: string, age: number) => void)>
// => [name: string, age: number]

type MyParameters<T extends (...arg: any[]) => any> = T extends (...arg: infer U) => any
  ? U
  : never;
