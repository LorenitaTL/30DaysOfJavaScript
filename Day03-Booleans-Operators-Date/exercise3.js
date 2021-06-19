console.log("EXERCISE LEVEL 3");
//Create a human readable time format using the Date time object.
//The hour and the minute should be all the time two digits
//(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let myNowDate = new Date();
const myYear = myNowDate.getFullYear(); // return year
const myMonth = myNowDate.getMonth() + 1; // return month(0 - 11)
const myDate = myNowDate.getDate(); // return date (1 - 31)
const myHours =
  myNowDate.getHours() < 10 ? "0" + myNowDate.getHours() : myNowDate.getHours(); // return number (0 - 23)
const myMinutes =
  myNowDate.getMinutes() < 10
    ? "0" + myNowDate.getMinutes()
    : myNowDate.getMinutes(); // return number (0 -59)

console.log(
  "New Format",
  `${myYear}-${myMonth}-${myDate} ${myHours}:${myMinutes}`
); // 4/1/2020 0:56
