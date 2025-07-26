export const omitElement = <T>(array: T[], ...elements: T[]) => {
  return array.filter((item) => !elements.includes(item));
};
