//From a key-value pairs object, create a new object that has the values of the original object as keys and the original object keys as values.
// We'll asume that all values from the original object are unique.

/* input
{
    JavaSCript: '100',
    TypeScript: '101',
    HTML: '110',
    CSS: '111',
    React: '120',
    Vue: '121',
    Angular: '122',
    'C#': '200',
    Java: '300',
    Go: '400',
  }
 output
  {
    100: 'JavaSCript',
    101: 'TypeScript',
    110: 'HTML',
    111: 'CSS',
    120: 'React',
    121: 'Vue',
    122: 'Angular',
    200: 'C#',
    300: 'Java',
    400: 'Go'
  } */

const { log } = require("../utils/logger");

function objectKeyValueSwitch(simpleKeyValueObject) {
  const entries = Object.entries(simpleKeyValueObject);
  log(entries);

  const switchEntryElements = ([key, value]) => [value, key];

  const switchedEntries = entries.map(switchEntryElements);
  log(switchedEntries);

  const switchedObject = Object.fromEntries(switchedEntries);
  log(switchedObject);

  return switchedObject;
}

module.exports = { objectKeyValueSwitch };
