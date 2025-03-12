// Arithmetic operators
// Addition +
let num_one = 20;
let num_two = 10;
num_two;
let total_sum = num_one + num_two;
console.log(total_sum);
// increasing a value by 1
num_two++;

// we also used the addition sign for combinning two strings to be come one
const first_name = "oyama";
const last_name = "dennis";
const middle_name = "enang";
const full_name = first_name + " " + last_name + " " + middle_name;
console.log(full_name);

//subtraction -
let sub_numbers = num_two - num_one;
console.log(sub_numbers);

// decrase a number by one
num_two--;

// multiplication *
let exchange_rate = 1650.45;
let dollar_value = 100;
let naira_value = exchane_rate * dollar_value;
console.log(naira_value);

// division /
let loafs_of_bread = 60;
let number_of_people = 4;
let person = loafs_of_bread / number_of_people;
console.log(person_loaf);

// modullus operator
// return the reminder of two number when divided and
// if there's no reminder after the division, it returns 0
let bread_remaining = loafs_of_bread % number_of_people;
console.log(bread_remaining);

// LOGICAL OPERATORS
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// logical operators always return true or false
let cost_of_production = 2000;
let total_sales = 1500;
let is_profit = total_sales > cost_of_production;
console.log("We made profit", is_profit);
let is_loss = total_sales < cost_of_production;
console.log("Are making a loss", is_loss);

// COMPARISON OPERATORS
// These are use to compare values togather.
const password = "dennis@888";
const confirmpassword = "dennis@888";
// === checks if two values are exactly the same thing.
const is_password_correct = password === confirmpassword;
console.log("Is user password correct: ", is_password_correct);
// [==] This is used to check if two values are the same thing
const husband_location = "Abuja";
const wife_location = "Lagos";

const couple_stay_same_location = husband_location !== wife_location;

console.log(
  "Husband and wife are not staying in the same place:",
  couple_stay_same_location
);
