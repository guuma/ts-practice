// type Props = GetRequiredProp<{ id: number, price?: number, amount: number }>
// expect to be { id: number, amount: number }

export type GetRequiredProps<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};

