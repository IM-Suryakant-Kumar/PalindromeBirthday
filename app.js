const date = document.querySelector("#dob");
const showBtn = document.querySelector("#show-btn");
const output = document.querySelector(".output");

function reverseStr(str) {
  let charArr = str.split("");
  let s = 0;
  let e = charArr.length - 1;
  while (s < e) {
    let temp = charArr[s];
    charArr[s] = charArr[e];
    charArr[e] = temp;
    s++;
    e--;
  }
//   console.log(charArr.join(""));
  return charArr.join("");
}

reverseStr("Hello");
