const ButtonSize = Object.freeze({
  XL: 'XL',
  L: 'L',
  M: 'M',
  S: 'S',
} as const);

type ButtonSize = typeof ButtonSize[keyof typeof ButtonSize];

export const resolveHeight = (size: ButtonSize) => {
  switch (size) {
    case 'XL': {
      return 64;
    }
    case 'L': {
      return 48;
    }
    case 'M': {
      return 32;
    }
    case 'S': {
      return 24;
    }
    default: {
      const _exhaustiveCheck: never = size;
      return _exhaustiveCheck;
    }
  }
};
