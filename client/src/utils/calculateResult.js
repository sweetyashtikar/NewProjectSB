export const calculateResult = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length !== 2 || !numbers.every(Array.isArray)) {
      throw new Error('Invalid input. Provide two arrays of numbers.');
    }
  
    const getLastDigit = (num) => Math.abs(num) % 10;
    const sum1 = numbers[0].reduce((acc, num) => acc + num, 0);
    const sum2 = numbers[1].reduce((acc, num) => acc + num, 0);
  
    return `${getLastDigit(sum1)}${getLastDigit(sum2)}`;
  };
  