var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

days_of_the_week.pop();
days_of_the_week.unshift('Sunday');

console.log(days_of_the_week);

var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var weekDays = days_of_the_week.slice(0, 5);

var weekEnds = days_of_the_week.slice(5);

console.log(weekDays);
console.log(weekEnds);

days_of_the_week.splice(5, 2);

console.log(days_of_the_week);

days_of_the_week.sort();

console.log(days_of_the_week);