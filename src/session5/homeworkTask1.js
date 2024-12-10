/* Task 1
Create a function that retuns all factors of a natural number.
i.e.
factors(100) = [1, 2, 4, 5, 10, 20, 25, 50, 100] */

const factors = (number) => {
  const factors = [];
  for (let i = 1; i <= number / 2; i++) {
    if (number % i == 0) {
      factors.push(i);
    }
  }
  factors.push(number);
  return factors;
};

module.exports = { factors };
