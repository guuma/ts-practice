export type User = {
  name: string;
} & RequiredPersonalData;

type PsysicalData = {
  height: number;
  weight: number;
};

type RequiredPersonalData = {
  [K in keyof PsysicalData]-?: PsysicalData[K];
};

const user: User = {
  name: 'John',
  height: 170,
  weight: 60,
};

export const foo = (value: string | number) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
};

type UserA = { name: string; lang: 'en' };
type UserB = { name: string; lang: 'ja' };
type UserC = { name: string; lang: 'fr' };

export const bar = (value: UserA | UserB | UserC) => {
  switch (value.lang) {
    case 'ja': {
      return value;
    }
    case 'en': {
      return value;
    }
    case 'fr': {
      return value;
    }
    default: {
      const _exhautiveChecked: never = value;
      return _exhautiveChecked;
    }
  }
};

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type TupleToObject<T extends readonly string[]> = {
  [K in T[number]]: K;
};
