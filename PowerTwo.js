function isPower(number) {
  if (number < 1) {
    return false;
  }
  let divideNumber = number;
  while (divideNumber !== 1) {
    if (divideNumber % 2 !== 0) {
      return false;
    }
    divideNumber = divideNumber / 2;
  }
  return true;
}

//   https://leetcode.com/problems/power-of-two/
