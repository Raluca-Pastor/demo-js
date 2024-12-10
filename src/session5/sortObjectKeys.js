/* input
{
    c: 102,
    a: 100,
    b: 101,
    d: 103,
  }
 output
  {
    a: 100,
    b: 101,
    c: 102,
    d: 103
  } */

const input = {
  c: 102,
  a: 100,
  b: 101,
  d: 103,
};

const { log } = require("../utils/logger");

const stringAscendingComparator = (s1, s2) => s1.localeCompare(s2);

function sortObjectKeys(obj) {
  const sortedKeys = Object.keys(obj).sort(stringAscendingComparator);
  log(sortedKeys);
  const sortedEntries = sortedKeys.map((key) => [key, obj[key]]);
  log(sortedEntries);
  const newObj = Object.fromEntries(sortedEntries);
  log(newObj);
  return newObj;
}

function sortObjectKeys2(obj) {
  const entries = Object.entries(obj);
  log(entries);
  entries.sort(([key1], [key2]) => (key1 < key2 ? -1 : 1));
  log(entries);
  const newObj = Object.fromEntries(entries);
  log(newObj);
  return newObj;
}

module.exports = { sortObjectKeys, sortObjectKeys2 };
