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
