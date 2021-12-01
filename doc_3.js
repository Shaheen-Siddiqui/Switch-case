// Question 3 write a code for these cases;
// If the month is 1, 3,5, 7, 8, 10, or 12, the number of days in a month is 31.
// If the month is 4, 6, 9, or 11, the number of days in that month is 30.
// If the month is 2, and the year is not the leap year, the number of days is 28. If the year is the leap year, the number of days is 29.
// If the input month is not in the range, the script jumps the default branch .

let a = require("readline-sync");
let Month = a.questionInt("Enter any Month")
let year = a.questionInt("Enter any Year")

switch (Month,year){
    case Month=1:
            case Month=3:
    case Month=5:
            case Month=7:
    case Month=8:
            case Month=10:
    case Month=12:
            // console.log("in this month number of days are :-31");
    break;
    default:
    break;}
