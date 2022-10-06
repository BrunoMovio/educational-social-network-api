export const groupBy = <T>(list: T[], iteratee: (item: T) => string) =>
  list.reduce(
    (acc, item) => ({
      ...acc,
      [iteratee(item)]: [...(acc[iteratee(item)] || []), item],
    }),
    {},
  );
