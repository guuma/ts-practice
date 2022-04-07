// expect to  type PickHeadValue<["1", "2", ...string[]]>
// => "1"

export type PickHeadValueType<T extends readonly any[]> = [...T][0];

// Generics Inferred as undefined if [] is passed to T
type t = PickHeadValueType<[]>;
