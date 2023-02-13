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

function isPalindrome(str) {
  if (reverseStr(str) === str) return true;
  return false;
}

function dateNumToStr(date) {
  const dateStr = { day: "", month: "", year: "" };

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

  //   console.log(dateStr);
  return dateStr;
}

function getDateInAllFormats(date) {
  const DDMMYYYY = date.day + date.month + date.year;
  const MMDDYYYY = date.month + date.day + date.year;
  const YYYYMMDD = date.year + date.month + date.day;
  const DDMMYY = date.day + date.month + date.year.slice(-2);
  const MMDDYY = date.month + date.day + date.year.slice(-2);
  const YYMMDD = date.year.slice(-2) + date.month + date.day;

//   console.log([DDMMYYYY, MMDDYYYY, YYYYMMDD, DDMMYY, MMDDYY, YYMMDD]);
  return [DDMMYYYY, MMDDYYYY, YYYYMMDD, DDMMYY, MMDDYY, YYMMDD];
}

function checkPalindromeForAllDateFormats(date) {
  const dateFormatList = getDateInAllFormats(date);
  const palindromeList = [];

  for (let i = 0; i < dateFormatList.length; i++) {
    let result = isPalindrome(dateFormatList[i]);
    if (result) {
      palindromeList.push(result);
    } else {
      palindromeList.push(result);
    }
  }

  return palindromeList;
}

const date = {
  day: 11,
  month: 2,
  year: 2020,
};

const dateStr = dateNumToStr(date);

console.log(checkPalindromeForAllDateFormats(dateStr));