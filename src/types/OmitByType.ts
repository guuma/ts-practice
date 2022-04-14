type OmitBoolean = OmitByType<
  {
    name: string;
    count: number;
    isReadOnly: boolean;
    isEnable: boolean;
  },
  boolean
>; // exptected to be { name: string, count: number }

type OmitByType<T, K extends T[keyof T]> = {
  [P in keyof T as K extends T[P] ? never : P]: T[P];
};
