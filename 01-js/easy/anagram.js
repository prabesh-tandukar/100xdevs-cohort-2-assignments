/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
///test

function isAnagram(str1, str2) {
  let similarityCount = 0;
  let word = "";
  if (str1.length == str2.length) {
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        // console.log(str1[i], str2[j]);
        if (str1[i] == str2[j]) {
          // similarityCount++;
          word += str1[i];
        }
      }
    }
    if (str1 == word) {
      console.log(word);
      return true;
    } else {
      console.log(word);
      return false;
    }
  } else {
    console.log(word);
    return false;
  }
}

module.exports = isAnagram;

const ans = isAnagram("carccc", "racccc");
console.log(ans);
