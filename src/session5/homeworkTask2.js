/* Task 2
Create a function that returns information about the length of the word in a text.
Words are separated by spaces. Do not count commas or dots. No duplicate for words.
i.e.
str = 'If I want to improve my skills, I need to practice. This is a good plan.'
wordLengthInfo(str) = {
  1: ['I', 'a'],
  2: ['If', 'to', 'my', 'is'],
  4: ['want', 'need', 'This','good', 'plan'],
  6: ['skills'],
  7: ['improve'],
  8 : ['practice']
} */

function wordsLenghtInfo(text) {
  const noComaDots = text.replaceAll(",", "").replaceAll(".", "");
  const textWords = noComaDots.split(" ");
  const len = [];
  for (let i = 0; i < textWords.length; i++) {
    len[i] = textWords[i].length;
  }
  const uniqLen = len.filter((item, index) => len.indexOf(item) === index);

  let result = {};
  for (let i = 0; i < uniqLen.length; i++) {
    let words = [];
    for (let j = 0; j < textWords.length; j++) {
      if (textWords[j].length === uniqLen[i]) {
        words.push(textWords[j]);
      }
    }
    const uniqWords = words.filter(
      (item, index) => words.indexOf(item) === index
    );
    result = { ...result, [uniqLen[i]]: uniqWords };
  }

  return result;
}

module.exports = { wordsLenghtInfo };
