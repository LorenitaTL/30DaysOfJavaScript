// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
document.getElementById("score").addEventListener("click", () => {
  let score = Number(window.prompt("Enter your score"));
  let grade = "";
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 70 && score <= 89) {
    grade = "B";
  } else if (score >= 60 && score <= 69) {
    grade = "C";
  } else if (score >= 50 && score <= 59) {
    grade = "D";
  } else if (score >= 0 && score <= 49) {
    grade = "F";
  } else {
    grade = "Error!";
  }
  document.getElementById("your-grade").innerHTML = grade;
});

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
document.getElementById("get-season").addEventListener("click", () => {
  let season = prompt("Enter month");
  console.log(season);
  let months = [
    "september",
    "october",
    "november",
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
  ];
  console.log(months.indexOf(season.toLowerCase()));
  let position = months.indexOf(season.toLowerCase());
  let seasonResult = "";
  if (position >= 0 && position <= 2) {
    seasonResult = "Autumn";
  } else if (position >= 3 && position <= 5) {
    seasonResult = "Winter";
  } else if (position >= 6 && position <= 8) {
    seasonResult = "Spring";
  } else if (position >= 9 && position <= 11) {
    seasonResult = "Summer";
  } else {
    seasonResult = "Error";
  }
  document.getElementById("season").innerHTML = seasonResult;
});

//Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

document.getElementById("check-today").addEventListener("click", () => {
  let day = document.getElementById("today").value.toLowerCase();

  let weekend = ["saturday", "sunday"];
  let workingDays = ["monday", "thursday", "wednesday", "tuesday", "friday"];
  if (weekend.includes(day)) {
    document.getElementById("day-result").innerHTML = day + " is a weeknd";
  } else if (workingDays.includes(day)) {
    document.getElementById("day-result").innerHTML = day + " is a working day";
  } else {
    document.getElementById("day-result").innerHTML = "error";
  }
});
