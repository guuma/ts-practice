
export type Props<T> = {
  id: T;
  name: string;
  age: number;
};

type User = {
  name: string;
};

type Japanese<T> = User & {
  state: T;
};

type American<T> = User & {
  state: T;
};

const JapaneseStateList = ['TOKYO', 'CHIBA'] as const;

type JapaneseStateList = typeof JapaneseStateList[number];

const JapaneseUser: Japanese<JapaneseStateList> = {
  name: 'Honda',
  state: 'CHIBA',
};

type UserList<T = Japanese<JapaneseStateList> extends User> = {
  users: T[]
}


const foo = <T extends string | number>(arg: T) => {

  if(typeof arg === "string") {
    return arg.toUpperCase()
  }

  return arg
}

const getProperty = <T, U extends keyof T>(obj: T, key: U) => {
  return obj[key]
}

const setProperty = <T, U extends keyof T>(obj: T, key: U, value: T[U]) => {
  obj[key] = value
}

const userObj = {
  id: 1,
  name: "Jon",
}

const value = getProperty(userObj, "id")

setProperty(userObj, "name", "Jack")

console.log(userObj)

const valArrayToStrArray = [1, 2, 3].map((val) => val.toString())