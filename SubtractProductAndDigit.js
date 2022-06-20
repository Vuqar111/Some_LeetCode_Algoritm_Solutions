const subtractProductAndSum = (n) => {
  let sum = 0;
  let product = 1;

  while (n > 0) {
    let digit = n % 10;
    sum += digit;
    product *= digit;
    n = Math.floor(n / 10);
  }

  return product - sum;
};

// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
