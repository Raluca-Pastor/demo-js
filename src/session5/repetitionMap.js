/* Count elements repetition within an array that contains strings, store information into an object, sorted by repetition value.

input
[
  'red',
  'green',
  'blue',
  'red',
  'red',
  'blue'
]
output
{
  green: 1,
  blue: 2,
  red: 3
} */

const repetitionMap = (array) => {
  //log(array);
  const arrayInfo = array.reduce((repetitionMap, item) => {
    if (repetitionMap[item] == undefined) {
      repetitionMap[item] = 1;
    } else {
      repetitionMap[item] = repetitionMap[item] + 1;
    }
    return repetitionMap;
  }, {});

  return Object.fromEntries(
    Object.entries(arrayInfo).sort(([_k1, v1], [_k, v2]) => v1 - v2)
  );
};

module.exports = { repetitionMap };
