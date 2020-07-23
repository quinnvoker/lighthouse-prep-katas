const talkingCalendar = function(date) {
  const y = date.slice(0, 4);
  const m = date.slice(5, 7);
  const d = date.slice(8);
  return englishMonth(m) + ' ' + englishDay(d) + ", " + y;
};

const englishDay = function(dayString) {
  const day = dayString[0] !== '0' ? dayString : dayString[1];
  let suffix;
  switch (dayString[1]) {
  case '1':
    suffix = dayString[0] !== '1' ? 'st' : 'th';
    break;
  case '2':
    suffix = dayString[0] !== '1' ? 'nd' : 'th';
    break;
  case '3':
    suffix = dayString[0] !== '1' ? 'rd' : 'th';
    break;
  default:
    suffix = 'th';
  }
  return day + suffix;
};

const englishMonth = function(monthString) {
  switch (monthString) {
  case '01':
    return 'January';
  case '02':
    return 'February';
  case '03':
    return 'March';
  case '04':
    return 'April';
  case '05':
    return 'May';
  case '06':
    return 'June';
  case '07':
    return 'July';
  case '08':
    return 'August';
  case '09':
    return 'September';
  case '10':
    return 'October';
  case '11':
    return 'November';
  case '12':
    return 'December';
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
