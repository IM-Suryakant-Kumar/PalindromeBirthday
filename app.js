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

function isLeapYear(year) {
  if (year % 400 == 0 || (year % 4 && year % 100 != 0)) {
    return true;
  } else {
    return false;
  }
}

function getNextDate(date) {
  let day = date.day + 1;
  let month = date.month;
  let year = date.year;

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(year) && day > 29) {
      day = 1;
      month = 3;
    } else if (day > 28) {
      day = 1;
      month = 3;
    }
  } else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }

  if (month > 12) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
}

function getNextPalindromeDate(date) {
  let nextDate = getNextDate(date);
  let ctr = 0;

  while (true) {
    ctr++;
    const dateStr = dateNumToStr(nextDate);
    const resultList = checkPalindromeForAllDateFormats(dateStr);

    for (let i = 0; i < resultList.length; i++) {
      if (resultList[i]) {
        return [ctr, nextDate];
      }
    }
    nextDate = getNextDate(nextDate);
  }
}

var date = {
  day: 5,
  month: 1,
  year: 2020,
};

console.log(getNextPalindromeDate(date));
