type JustFunctionType = () => void;

type MultipleTypes = string | number | JustFunctionType;

export type JustStringType = Exclude<MultipleTypes, number | JustFunctionType>;

type ButonType = 'XL' | 'L' | 'M' | 'S';

const resolveButonSize = (buttonType: ButonType) => {
  switch (buttonType) {
    case 'XL':
      return 32;
    case 'L':
      return 28;
    case 'M':
      return 24;
    default:
      const _exhaustiveCheck: never = buttonType;
      return _exhaustiveCheck;
  }
};

const greeter = (cb: (message: string) => void) => {
  cb('Hello, World');
};

const printConsole = (message: string) => {
  console.log(message);
};

greeter(printConsole);

export const user = {
  id: 1,
  name: 'John',
};

const double = (value: number | string) => {
  if (typeof value === 'number') {
    value * 2;
  }
  return Number(value) * 2;
};

type userKeys = keyof typeof user;

type ValueOf<T> = T[keyof T];

type User = ValueOf<typeof user>;

type CommonUser = {
  name: string;
  age: number;
};

type JapaneseUser = CommonUser & {
  lang: 'ja';
};

type EnglishUser = CommonUser & {
  lang: 'en';
};

const isJapaneseUser = (user: JapaneseUser | EnglishUser): user is JapaneseUser => {
  return user.lang === 'ja';
};

export const hoo = (user: any) => {
  if (isJapaneseUser(user)) {
    return `${user.name} is Japanese Speaker`;
  }
  return `${user.name} is English Speaker`;
};

// expected to type Result = Concat<[1], [2]>
// => [1, 2]

type Concat<T extends any[], U extends any[]> = [...T, ...U];

type r = Concat<[1], [2]>;

const tail = (arg: any[]) => {
  const [_, ...result] = arg;
  return result;
};

const tail_ = tail(['1', '2']);

type Repeat2<T extends readonly any[]> = [...T, ...T];

type SNSN = Repeat2<[string, number]>;
// type SNSN = [string, number, string, numbere]

type BSNSNB = [boolean, ...SNSN, boolean];
// type BSNSNB = [boolean, string, number, string, number, boolean]

type NNT<T extends any[]> = [number, number, ...T];

type NNSN = NNT<[number, string]>;
// type NNSN = [number, number, number, string]

// Addn Type is Variable-length tuple with number type at the beginning and end
type AddN<T extends readonly any[]> = [number, ...T, number];

type NSBN = AddN<[string, boolean]>;

type NSsN = AddN<string[]>;
// こうなってほしい => type NSsN<number, ...string[], number>
// 実際は `...string[]` 以降が吸収されて、最後が可変長のタプル型となる => type NssN<number, ...(string | number), number>

type VariadicTuple<T extends readonly any[], U extends readonly any[]> = [...T, ...U];

type SsNs = VariadicTuple<string[], number[]>;

const SnNs: SsNs = ['1', '2'];

type Tail<T extends readonly [any, ...any[]]> = T extends readonly [any, ...infer U] ? U : never

type SB = Tail<[number, string, boolean]>
