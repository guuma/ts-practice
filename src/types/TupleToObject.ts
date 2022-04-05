// expect to TupleToObject<["BUY", "SELL"]>
// => {"BUY": "BUY", "SELL": "SELL"}

export type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};

