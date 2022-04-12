// expect to be If<true, "true", "false">
// => "true"

type If<C extends boolean, T, F> = C extends true ? T : F;