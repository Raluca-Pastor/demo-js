/* Task 3
Create a function that converts a natural number to binary (base 2).
i.e.
toBinary(3) = 11
toBinary(10) = 1010 */

function toBinary(nr) {
  let rez = [];
  let i = 0;
  while (nr >= 1) {
    rez[i] = nr % 2;
    nr = Math.floor(nr / 2);
    i++;
  }
  const rezFinal = rez.reverse();
  let r = "";
  for (let values of rezFinal) {
    r = r + values;
  }
  return r;
}

module.exports = { toBinary };
