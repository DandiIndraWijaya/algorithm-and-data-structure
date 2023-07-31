function isPalindrome(string) {
  string = string.toLowerCase().split('');
  const validChars = "abcdefghijklmnopqrstuvwxyz";
  const lettersArr = [];

  string.forEach(char => {
    if(validChars.indexOf(char) > -1) lettersArr.push(char)
  });
  
  return lettersArr.join('') === lettersArr.reverse().join('')
}

console.log(isPalindrome("Madam, I'm Adam"))