//Write a program which tells the number of days in a month.7
document.getElementById("check-days").addEventListener("click", () => {
  let monthInput = document.getElementById("month").value;
  console.log(monthInput);
  let daysOfTheMonth = "";

  switch (monthInput.toLowerCase()) {
    case "january":
      daysOfTheMonth = 31;
      break;
    case "february":
      daysOfTheMonth = 28;
      break;
    case "march":
      daysOfTheMonth = 31;
      break;
    case "april":
      daysOfTheMonth = 30;
      break;
    case "may":
      daysOfTheMonth = 31;
      break;
    case "june":
      daysOfTheMonth = 30;
      break;
    case "july":
      daysOfTheMonth = 31;
      break;
    case "august":
      daysOfTheMonth = 31;
      break;
    case "september":
      daysOfTheMonth = 30;
      break;
    case "october":
      daysOfTheMonth = 31;
      break;
    case "november":
      daysOfTheMonth = 30;
      break;
    case "december":
      daysOfTheMonth = 31;
      break;
    default:
      break;
  }
  document.getElementById("days-result").innerHTML = daysOfTheMonth;
});

//Write a program which tells the number of days in a month, now consider leap year.
document
  .getElementById("check-days-leap-year")
  .addEventListener("click", () => {
    let monthsList = {
      january: 31,
      february: 29,
      march: 31,
      april: 30,
      may: 31,
      june: 30,
      july: 31,
      august: 31,
      september: 30,
      october: 31,
      november: 30,
      december: 31,
    };
    let monthInput = document.getElementById("month2").value.toLowerCase();

    if (monthsList[monthInput]) {
      document.getElementById("days-leap-year").innerHTML =
        monthsList[monthInput];
    }else{
        document.getElementById("days-leap-year").innerHTML ='Error!'
    }
  });
