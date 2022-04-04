export type User = {
  id: number;
  name: string;
  age: number;
};

type FilterKeys<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type StringKeys = FilterKeys<User, string>;

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type ExcludeType<T, U> = T extends U ? never : T;
