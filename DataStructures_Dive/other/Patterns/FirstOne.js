//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
for (let i = 1; i <= 9; i++) {
  let line = "";
  let spaces = i <= 5 ? 5 - i : i - 5;
  let stars = i <= 5 ? 2 * i - 1 : 2 * (10 - i) - 1;

  for (let j = 0; j < spaces + stars; j++) {
    if (j < spaces) {
      line += " ";
    } else {
      line += "*";
    }
  }
  console.log(line);
}