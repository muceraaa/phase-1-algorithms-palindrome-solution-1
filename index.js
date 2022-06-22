function reverseString(word) {
    const wordArray = word.split("");
    const reversedWordArray = wordArray.reverse();
    const reversedWord = reversedWordArray.join("");
    return reversedWord;
  }
  
function isPalindrome(word) {
    const reversedWord = reverseString(word);
    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
  }

/* 
  Add your pseudocode here

reverse the input string
if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here

I need to make an isPalindrome function that returns either true or false.
 When the input string is the same forwards and backwards,
 I should return true.
 And if not, I should return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
