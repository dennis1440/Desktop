// A function contains a block of code which are grouped together to perform task.

// a sport app
// i. Users can play football
//ii. Users can play football
// iii. Users can play tennis

// a function for football
function handlePlayFootball() {
  // all the code for play football here
}

// A function for tennis
function handlePlayTennis() {
  // all the code for playing tennis here
}

function sumNumbers() {
  let x = 23;
  let y = 41;
  // the return statement holds the output of the function
  return x + y;
}

console.log(sumNumbers());

function subtractNumbers() {
  let x = 45;
  let y = 15;
  return x - y;
}
console.log(subtractNumbers());

function fullName() {
  let firstName = "oyama";
  let lastName = "dennis";

  return firstName + " " + lastName;
}

console.log(fullName());

function fullNameTwo() {
  let firstName = "john";
  let lastName = "Wick";

  return firstName + " " + lastName;
}

// Example of reusable function
// A reusable function is a that is use to perform the task multiple times
//but for each time, the values given to the function changes.
// A Reusable function always expect PARAMETERS / ARGUMENTIONS

function calculateMonthlyProfit(sales_made, cost_of_production) {
  return sales_made - cost_of_production;
}

console.log("january", calculateMonthlyProfit(10000, 4000));
console.log("february", calculateMonthlyProfit(5000, 3500));
console.log("March", calculteMonthlyProfit(3000, 10000));

function calculateaveragescore(average_score, total_score) {
  return average_score - total_score;
}
console.log("physics", calculateaveragescore(60, 40));
console.log("biology", calculateaveragescore(55, 45));

function calculateMonthlyProfit(sales_made, cost_of_production) {
  return sales_made - cost_of_production;
}

// Arrow function syntax
const interestonload = (amount) => {
  let rate = 15.8;
  return amount * rate;
};

console.log("Mr kola you'll repay", interestOnLoan(5000));
console.log("Miss bukola you'll repay", interestOnLoan(10000));
