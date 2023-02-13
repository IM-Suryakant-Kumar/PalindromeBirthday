const dob = document.querySelector("#dob");
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

function getPreviousDate(date) {
  let day = date.day - 1;
  let month = date.month;
  let year = date.year;

  if (day === 0) {
    month--;

    const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];

    let isMonthOf31days = false;

    for (let i = 0; i < monthsWith31Days.length; i++) {
      if (month === monthsWith31Days[i]) {
        isMonthOf31days = true;
        break;
      }
    }

    if (isMonthOf31days) {
      day = 31;
    } else {
      if (month === 2) {
        if (isLeapYear(year)) {
          day = 29;
        } else {
          day = 28;
        }
      } else {
        day = 30;
      }
    }
  }

  if (month === 0) {
    year--;
    month = 12;
    day = 31;
  }

  const newDate = { day: day, month: month, year: year };
  return newDate;
}

function getPreviousPalindromeDate(date) {
  let previousDate = getPreviousDate(date);
  let ctr = 0;

  while (1) {
    ctr++;
    const dateStr = dateNumToStr(previousDate);
    const resultList = checkPalindromeForAllDateFormats(dateStr);

    for (let i = 0; i < resultList.length; i++) {
      if (resultList[i]) {
        return [ctr, previousDate];
      }
    }
    previousDate = getPreviousDate(previousDate);
  }
}

showBtn.addEventListener("click", () => {
  if(dob.value != '') {
    console.log(dob.value);
  }
});
