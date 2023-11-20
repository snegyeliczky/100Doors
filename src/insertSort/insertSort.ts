export const insertSort = (numbers: number[]): number[] => {
  for (let loopIndex = 1; loopIndex < numbers.length; loopIndex++) {
    let current = numbers[loopIndex];
    let previousIndex = loopIndex - 1;

    while (previousIndex > -1 && current < numbers[previousIndex]) {
      numbers[previousIndex + 1] = numbers[previousIndex];
      previousIndex--;
    }
    numbers[previousIndex + 1] = current;
  }

  return numbers;
};
