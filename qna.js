// qes: 1

var myString = 'My Name is Khan';
var myBul = true;
var myBul2 = false;
var myNum = 7;

//--------------------

// qes: 2

let var1 = 'My name is';
const var2 = 'Emon';
var1 = 'Amar nam ';
console.log(var1);

//----------------------

// qes: 3

var number1 = 7;
var number2 = 3;
var adding = number1 + number2;
console.log('adding is ', adding);

var substract = number1 - number2;
console.log('substract is ', substract);

var multiplication = number1 * number2;
console.log('multiplication is ', multiplication);

var divided = number1 / number2;
console.log('divided is ', divided);

var modulas = number1 % number2;
console.log('modulas is ', modulas);

//-------------------------------------

// qes: 4

var num1 = 7;
var num2 = 3;
if (num1 > num2) {
    console.log('num1 is big');
}
else {
    console.log('num2 is big');
}

if (num1 < num2) {
    console.log('num1 is small');
}
else {
    console.log('num2 is small');
}

if (num1 == num2) {
    console.log('both equal');
}
else {
    console.log('both not equal');
}

if (num1 != num2) {
    console.log('both are not equal');
}
else {
    console.log('both are equal');
}

if (num1 >= num2) {
    console.log('num1 is big or equal');
}
else {
    console.log('num2 is big or equal');
}

if (num1 <= num2) {
    console.log('num1 is small or equal');
}
else {
    console.log('num2 is small or equal');
}

//---------------------------------

// qes: 5

var num1 = 7;
var num2 = 3;
var firstCondition = num1 > num2 && num1 != num2;
console.log(firstCondition);

var secondConditon = num1 > num2 || num1 == num2;
console.log(secondConditon);

//-----------------------------------------

// qes: 6

var number1 = 7;
var number2 = 3;
if (number1 > number2) {
    console.log('Number1 is big than Number2');
}
else {
    console.log('Number2 is bigger than number1')
}

if (number1 == number2) {
    console.log('Both are equal');
}
else {
    console.log('Both are not equal');
}

//--------------------------------------

// qes: 7

var number = 7;
while (number <= 19) {
    if (number % 2 == 1) {
        console.log(number);
    }
    number++;
}

//----------------------------

// qes: 8

var array = [1, 2, 3, 4, 5, 6, 7];
var arrayLength = array.length;
console.log('array length is', arrayLength);

array[4] = 5.5;
console.log(array);

array.push(8, 9);
console.log(array);

array.pop();
console.log(array);


//-----------------------

// qes: 9

var numbers = [1, 2, 3, 4, 5, 6, 7];
for (const number of numbers) {
    console.log(number)
}


//---------------------------

// qes: 10

var numbers = [100, 22, 30, 84, 55, 106, 97];
for (const number of numbers) {
    if (number > 80) {
        console.log(number)
    }
}

//-------------------------

// qes: 11

function multiplication(num1, num2, num3) {
    var totalMultiplication = num1 * num2 * num3;
    return totalMultiplication;
}
var total = multiplication(2, 3, 4);
console.log(total);

//-----------------------------

// qes: 12

var person = {
    name: 'emon',
    age: 22,
    weight: 55
};

person.weight = 57;
console.log(person);

//-------------------------

// All are done successfully.






