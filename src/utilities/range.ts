export const range: any = (start: number, end: number) => {
  if (start === end) {
    return [start];
  }

  return [start, ...range(start + 1, end)];
};