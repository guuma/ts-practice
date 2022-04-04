// type OptionalizedProp = OptionalizedType<{ id: number, price?: string, amount: number }, number>
// expect to be { id?: number, amount?: number } & { price?: string }

export type OptionalizedType<T, U extends T[keyof T]> = {
  [K in keyof T as U extends T[K] ? K : never]?: T[K];
} & {
  [K in keyof T as U extends T[K] ? never : K]: T[K];
};