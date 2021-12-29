/*
    Trolls are attacking your comment section!

    A common way to deal with this situation is to remove all 
    of the vowels from the trolls' comments, neutralizing the threat.

    Your task is to write a function that takes a string and return 
    a new string with all vowels removed.

    For example, the string "This website is for losers LOL!" would 
    become "Ths wbst s fr lsrs LL!".

    Note: for this kata y isn't considered a vowel.

*/
function disemvowel(str) {
  let strArr = str.split('');
  const newArr = strArr.filter(
    (letter) =>
      letter.toLowerCase() != 'a' &&
      letter.toLowerCase() != 'e' &&
      letter.toLowerCase() != 'i' &&
      letter.toLowerCase() != 'o' &&
      letter.toLowerCase() != 'u'
  );
  return newArr.join('');
}

console.log(disemvowel('This website is for losers LOL!'));
