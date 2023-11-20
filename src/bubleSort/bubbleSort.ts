export const bubbleSort = (numbers: number[]): number[] => {
  for (let current = 0; current < numbers.length; current++) {
    for (let inner = 0; inner < numbers.length - current - 1; inner++) {
      let temp = numbers[inner];
      if (temp > numbers[inner + 1]) {
        numbers[inner] = numbers[inner + 1];
        numbers[inner + 1] = temp;
      }
    }
  }
  return numbers;
};
