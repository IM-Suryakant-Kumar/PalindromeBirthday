// const date = document.querySelector("#dob");
// const showBtn = document.querySelector("#show-btn");
// const output = document.querySelector(".output");

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

function checkPalindrome(str) {
  if (reverseStr(str) === str) return true;
  return false;
}

function dateNumToStr(date) {
  dateStr = { day: "", month: "", year: "" };

  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }

  dateStr.year = date.year.toString();

  console.log(dateStr);
  return dateStr;
}

const date = { day: "5", month: "4", year: "2002" };

dateNumToStr(date);
