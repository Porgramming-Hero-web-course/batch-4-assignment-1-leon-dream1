
const countWordOccurrences = (sentence: string, word: string): number => {
  let count: number = 0;
  const sentenceArr = sentence.split(" ");

  sentenceArr.forEach((singleWord) => {
    if (singleWord.toLowerCase() === word.toLowerCase()) {
      count++;
    }
  });

  return count;
};

// console.log(countWordOccurrences("I love typescript typeScript and I Love Javascript", "I"));
