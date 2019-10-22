//write first method
//The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation.
//We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

// sleep_in(False, False) → True
// sleep_in(True, False) → False
// sleep_in(False, True) → True

function sleep_in(weekday,vacation) {
    if (weekday == false || vacation == true){
        return true;
    } else {
        return false;
    }
}

//write second method
// We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling.
// We are in trouble if they are both smiling or if neither of them is smiling. Return True if we are in trouble.
//
// monkey_trouble(True, True) → True
// monkey_trouble(False, False) → True
// monkey_trouble(True, False) → False

function monkey_trouble(param1, param2) {
    if(param1 == ! param2){
        return false
    } else {
        return true
    }
}

// Given a string and a non-negative int n, return a larger string that is n copies of the original string.
//
// string_times('Hi', 2) → 'HiHi'
// string_times('Hi', 3) → 'HiHiHi'
// string_times('Hi', 1) → 'Hi'

function string_times(string, num){
    var result = "";
    for (var i = 0; i < num; i++) {
        result += string;
    }
    return result;
}

// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars,
// or whatever is there if the string is less than length 3. Return n copies of the front;
//
// front_times('Chocolate', 2) → 'ChoCho'
// front_times('Chocolate', 3) → 'ChoChoCho'
// front_times('Abc', 3) → 'AbcAbcAbc'

function front_times(string, num){
    var result = "";
    var front = string.substring(0,3);
    for (var i = 0; i < num; i++){
        result += front;
    }
    return result;
}

// 5. String_bits
// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".
//
// string_bits('Hello') → 'Hlo'
// string_bits('Hi') → 'H'
// string_bits('Heeololeo') → 'Hello'

function string_bits(string) {
    var result = "";
    var stringLength = string.length;
    var num = 0;
    while(num < stringLength){
        var end = num + 1;
        var bit = string.substring(num, end);
        if (num % 2 == 0){
            result += bit;
        }
        num++
    }
    return result;
}

// 6. caughtSpeeding
// You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an
// int value: 0=no ticket, 1 = small ticket, 2 = big ticket. If speed is 60 or less, the result is 0. If speed is
// between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday
// -- on that day, your speed can be 5 higher in all cases.
//
// caughtSpeeding(60, false) → 0    caughtSpeeding(65, false) → 1  caughtSpeeding(65, true) → 0

function caughtSpeeding(speed, boolean) {
    // you could make the 60, 61, 80, and 81 into variables to make this shorter, but this is easier to check and to
    // see what is happening and why it works.
    if (boolean == false) {
        if (speed <= 60) {
            var ticketIndex = 0;
        } else if (speed >= 61 && speed <= 80) {
            var ticketIndex = 1;
        } else if (speed >= 81) {
            var ticketIndex = 2;
        }
    } else {
        if (speed <= 65) {
            var ticketIndex = 0;
        } else if (speed >= 66 && speed <= 85) {
            var ticketIndex = 1;
        } else if (speed >= 86) {
            var ticketIndex = 2;
        }
    }
    return ticketIndex
    if (ticketIndex == 0) {
        return ("No  ticket!");
    } else if (ticketIndex == 1) {
        return ("Small ticket")
    } else if (ticketIndex == 2) {
        return ("Big ticket");
    }
}

// 7. fizzBuzz
// Given a number, return the string form of the number followed by "!". So the int 6 yields "6!". Except if the number
// is divisible by 3 use "Fizz" instead of the number, and if the number is divisible by 5 use "Buzz", and if divisible
// by both 3 and 5, use "FizzBuzz". Note: the % "mod" operator computes the remainder after division, so 23 % 10 yields
// 3. What will the remainder be when one number divides evenly into another?
//
//     fizzString2(1) → "1!"        fizzString2(2) → "2!"      fizzString2(3) → "Fizz!"

function fizzBuzz(num) {
    var result = "";
    var byte = num;
    if (num % 3 === 0) {
        result += "Fizz";
        byte = "";
    }
    if (num % 5 === 0) {
        result += "Buzz";
        byte = "";
    }
    if (num % 5 !== 0 && num % 3 !== 0) {
        byte = num + "!";
        result += byte;
    }
    return result;
}

// 8. teaParty
// We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as 0=bad, 1=good,
// or 2=great. A party is good (1) if both tea and candy are at least 5. However, if either tea or candy is at least
// double the amount of the other one, the party is great (2). However, in all cases, if either tea or candy is less
// than 5, the party is always bad (0).
//
// teaParty(6, 8) → 1         teaParty(3, 8) → 0          teaParty(20, 6) → 2

function teaParty(tea, candy){
    var score = 0;
    if (tea >= 5 && candy >= 5){
        score = 1;
        var greatTea = doubleNum(candy);
        var greatCandy = doubleNum(tea);
        if(tea >= greatTea){
            score = 2;
        }
        if(candy >= greatCandy){
            score = 2;
        }
    }
    return score;
}
function doubleNum(x){
    x *= 2;
    return x;
}

// 9. blackjack
// Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both
// go over.
//
// blackjack(19, 21) → 21       blackjack(21, 19) → 21        blackjack(19, 22) → 19

function blackjack(num1, num2) {
    var MAX = 21;
    if(num1 > MAX && num2 > MAX){
        return 0;
    } else {
        if(num1 >= num2 && num1 <= MAX || num2 > MAX){
            return num1;
        } else {
            return num2;
        }
    }
}

// 10. loneSum
// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values,
// it does not count towards the sum.
//
// loneSum(1, 2, 3) → 6       loneSum(3, 2, 3) → 2        loneSum(3, 3, 3) → 0

function loneSum(num1, num2, num3) {
    if (num1 == num2 && num1 == num3){
        num1 = 0;
        num2 = 0;
        num3 = 0;
    } else if (num1 === num2){
        num1 = 0;
        num2 = 0;
    }else if (num2 == num3){
        num2 = 0;
        num3 = 0;
    }else if (num1 == num3){
        num1 = 0;
        num3 = 0;
    }
    var result = num1 + num2 + num3;
    return result;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times("true", 6);
    document.getElementById("output").innerHTML += front_times("true", 6);
    document.getElementById("output").innerHTML += sting_bits("hello");
    document.getElementById("output").innerHTML += caughtSpeeding(90, true);
    document.getElementById("output").innerHTML += fizzBuzz(56);
    document.getElementById("output").innerHTML += teaParty(2, 5);
    document.getElementById("output").innerHTML += blackjack(12, 34);
    document.getElementById("output").innerHTML += loneSum(1, 8, 45);
}
