// todo Replace With Alphabet Position
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

    return alphabetNumber.join(" ");;

  }

  const hello = (alphabetPosition('fghij'));
  console.log(hello);
  console.log(typeof (hello))

}


// todo -> Find The Parity Outlier
{
  function findOutlier(integers) {
    const evenArr = integers.filter(value => {
      return value % 2 === 0;
    });
    const oddArr = integers.filter(value => {
      return value % 2 !== 0;
    });

    if (evenArr.length === 1) {
      return evenArr[0];
    } else {
      return oddArr[0];
    }
  }
  findOutlier([1, 2, 3])
}