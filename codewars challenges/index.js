// todo -> (1) Replace With Alphabet Position
{
  function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetNumber = [];
    text = text.toLowerCase();

    for (const cur of text) {
      let index = alphabet.indexOf(cur);
      if (index === -1) {
        continue;
      } else {
        alphabetNumber.push(index + 1);
      }
    }

    return alphabetNumber.join(" ");
  }

  const hello = alphabetPosition("fghij");
  console.log(hello);
  console.log(typeof hello);
}

// todo -> (2) Find The Parity Outlier
{
  function findOutlier(integers) {
    const evenArr = integers.filter((value) => {
      return value % 2 === 0;
    });
    const oddArr = integers.filter((value) => {
      return value % 2 !== 0;
    });

    if (evenArr.length === 1) {
      return evenArr[0];
    } else {
      return oddArr[0];
    }
  }
  findOutlier([1, 2, 3]);
}

// todo -> (3) Find the first non-consecutive number
{
  function firstNonConsecutive(arr) {
    for (i = 0; i < arr.length - 1; i++) {
      const cur = arr[i];
      const next = arr[i + 1];
      if (cur + 1 !== next) {
        return next;
      }
    }

    return null;
  }
  const res = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
  console.log(res);

  // * Or we can do that also
  {
    function firstNonConsecutive(arr) {
      let result = arr.find((val, index) => val !== index + arr[0]);

      return Number.isInteger(result) ? result : null;
    }
  }
}

// todo -> (4) No oddities here
{
  function noOdds(values) {
    // Return all non-odd values
    return values.filter((value) => value % 2 === 0);
  }
  const res = noOdds([1, 2, 3, 4, 5, 6, 7]);
  console.log(res);
}

// todo -> (5) Partial Keys
{
  function partialKeys(obj) {
    // loop over the properties of the object
    // create all substring properties of the object and assign them to value

    const newObj = {};
    Object.keys(obj)
      .sort()
      .reverse()
      .forEach((key) => {
        for (i = 0; i < key.length; i++) {
          const newKey = key.substring(0, i + 1);
          newObj[newKey] = obj[key];
        }
      });

    return newObj;
  }

  partialKeys({ abcd: 1 });
}

// todo -> (6) Constant Value
{
  /*
  * Given a lowercase string that has alphabetic characters only and no spaces, return the    highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

  * We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

  *  For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
  */

  function chaToValue(c) {
    return c.charCodeAt(0) - 96;
  }

  function addUpSubstring(str) {
    return str
      .split("")
      .map(chaToValue)
      .reduce((acc, item) => (acc += item), 0);
  }

  function solve(s) {
    return Math.max(
      ...s
        .replace(/[aeiou]+/g, " ")
        .trim()
        .split(" ")
        .map(addUpSubstring)
    );
  }

  // solution from others
  {
    const solve = (s) =>
      s.split(/[aeiou]+/).reduce(
        (s, n) =>
          Math.max(
            s,
            n.split("").reduce((a, b) => a + b.charCodeAt(0) - 96, 0)
          ),
        0
      );
  }
  {
    function solve(s) {
      return Math.max(
        ...s
          .match(/[^aeiou]+/g)
          .map((x) => [...x].reduce((s, v) => s + v.charCodeAt() - 96, 0))
      );
    }
  }
}

// todo -> (7) Stop gninnipS My sdroW!
{
  /*
  * Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

  * Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
   */
  function spinWords(longStr) {
    return longStr
      .split(" ")
      .map((word) => (word.length >= 5 ? reverseStr(word) : word))
      .join(" ");
  }

  function reverseStr(str) {
    return str.split("").reverse().join("");
  }
}

// todo -> (8) Does my number look big in this?
{
  /*
 * A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

 * For example, take 153 (3 digits):
  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

  *  and 1634 (4 digits):
  1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

 * The Challenge:
 * Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

 * Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.
  */

  function narcissistic(value) {
    const valueStr = `${value}`;
    const length = valueStr.length;
    return (
      valueStr
        .split("")
        .reduce((acc, item) => (acc += Math.pow(+item, length)), 0) === value
    );
  }
}

// todo -> (9) Find the missing number
{
  /*
  #Find the missing letter

  Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

  You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
  The array will always contain letters in only one case.

  Example:

  ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
  */
  function findMissingLetter(array) {}
}
