type YYYYMMDDHHmmss = `${number}/${number}/${number}/${number}:${number}:${number}`;

const date1: YYYYMMDDHHmmss = '2021/01/19/13:16:16';
const date2: YYYYMMDDHHmmss = '2021/01/19/13:16'; // type Error

export type GetBaseCurrency<T extends string> = T extends `${infer U}_${string}` ? U : never;

const btc1: GetBaseCurrency<`BTC_JPY`> = "BTC"
const btc2: GetBaseCurrency<`BTC_JPY`> = "ETH" // type Error
