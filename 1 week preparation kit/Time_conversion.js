function timeConversion(s) {
  // Write your code here
  let hours = s.slice(0, 2);
  if (hours < 12) {
    if (s.includes("PM")) {
      let newFormat = +hours + 12;
      return `${newFormat}${s.slice(2, 8)}`;
    } else return `${hours}${s.slice(2, 8)}`;
  }
  if ((hours = 12)) {
    if (s.includes("PM")) {
      return `${hours}${s.slice(2, 8)}`;
    } else {
      let newFormat = 0;
      return `${newFormat}0${s.slice(2, 8)}`;
    }
  }
}
timeConversion("12:00:00PM");
timeConversion("3:00:00PM");
timeConversion("06:40:03AM");
timeConversion("12:40:03PM");

// ok done
