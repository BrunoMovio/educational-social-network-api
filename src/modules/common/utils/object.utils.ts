export const toPairs = <T extends Record<string, unknown>>(obj: T) =>
  Object.entries(obj);
