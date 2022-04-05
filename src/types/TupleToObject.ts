// const orderSide = ["BUY", "SELL"] as const
// expect to TupleToObject<typeof orderSide>
// => {"BUY": "BUY", "SELL": "SELL"}

export type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};

const orderSide = ['BUY', 'SELL'] as const;

const orderSideObj: TupleToObject<typeof orderSide> = {
  BUY: 'BUY',
  SELL: 'SEL',
};
// The typo is Error

const notConsOrderSide = ['BUY', 'SELL'];

const notConsOrderSideObj: TupleToObject<typeof notConsOrderSide> = {
  BUY: 'BUY',
  SELL: 'SELLL',
};
// The typo is not Error
