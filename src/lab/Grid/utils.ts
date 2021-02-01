export const makeRow = (size: number) => {
  return new Array(size).fill(1);
};

export const makeGrid = (size: number): number[][] => {
  return [...new Array(size).fill(makeRow(size))];
};
