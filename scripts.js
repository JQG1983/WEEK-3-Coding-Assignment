//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages= [3,9,23,64,2,8,28,93];{
//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//•	Do not use numbers to reference the last element, find it programmatically, 
//•	ages[7] – ages[0] is not allowed!
function subtractAges(firstAge , secondAge){
    subtractedAge = firstAge-secondAge;
    console.log("Subtracted Age is "+ subtractedAge);
}
}
subtractAges(ages[7] , ages[0]);

//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages[8] = 44;

subtractAges(ages[8] , ages[0]);
//1c.	Use a loop to iterate through the array and calculate the average age. 
function averageAges(){  //this function will help us get the average age of an array
  let agesTotal = 0;
  let agesTotalElements= ages.length;
  console.log("This is my ", ages , "array");
  for (let i = 0; i<ages.length; i++){
    agesTotal+=ages[i];
   // console.log("this is my ages total " , agesTotal);
   // console.log("This is my index; ",i, "This is each element in my array ", ages[i]);
  }
 let averageAge=  agesTotal/agesTotalElements; //this is our average age variable
 console.log("This is my average age ", averageAge);
//    let agesTotal = ages.reduce(function(accumulator,currentValue){
//        return accumulator + currentValue;
//    });
//    console.log("The sum of all ages is "+agesTotal);
    
}
 averageAges();



//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let totalNames = names.length;
let totalLetters = names.map(function(element){
    return element.length;
})
//console.log(totalLetters);
//console.log(totalNames);
let sum=totalLetters.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
})
let avgLetters= (sum/totalNames);{
    console.log("The average number of letters in each name is ", avgLetters);
}
//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
for (let name of names){
//onsole.log(name.join(' '));
let usersToString= JSON.stringify(name);
console.log(usersToString);
}

//3.	How do you access the last element of any array?


//   .pop removes the last element from an array and returns it. 


//4.	How do you access the first element of any array?
 
//     myArray[0]

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously
// created names array and add the length of each name to the nameLengths array.
//For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array

 const nameLengths= names.map(function(element){
    return element.length;
 });

 console.log("The total number of letters in each name in our Names Array is " + nameLengths);
  
//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let newSum=nameLengths.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
})
console.log("The Sum of all the letters in our Names Array is " + newSum);
//7.	Write a function that takes two parameters, word and n, as arguments and returns the word 
//concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
const repeatWords =(a,b)=>{
    let result = "";
    for(let i=0; i<b; i++){
        result+= a;
    }
        return result;
}
console.log(repeatWords("Hello ",3));

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
//•	The full name should be the first and the last name separated by a space.
let createFullName= (firstName, lastName)=>`${firstName} ${lastName}`;{
    console.log(createFullName("Jamaar","Green"));
}

//9.	Write a function that takes an array of numbers and returns true if the sum 
//of all the numbers in the array is greater than 100.
let numbersArray=[7,15,34,45,56,97];

let isArrayGreaterThan100 =numbersArray.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
})
 if (isArrayGreaterThan100 > 100){
    console.log(true);
 } else{
    console.log(false);
 }

console.log(isArrayGreaterThan100);
//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
let numbersArray2=[45,55,85,45,78,32,59,95];
let arrayDivisor=0;
let arraySum=0;
let avg=arraySum/arrayDivisor;
const getArrayAverages = ()=>{
for(let i =0; i<numbersArray2.length;i++){
    arrayDivisor+=numbersArray2[i];
}
let arraySum =numbersArray2.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
})
}
getArrayAverages();
//11.	Write a function that takes two arrays of numbers and returns true if the average of the 
//elements in the first array is greater than the average of the elements in the second array.

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside,moneyInPocket){
    if (isHotOutside === true && moneyInPocket > 10.50){
        console.log(true);
    }
}
willBuyDrink(true,30.00);
//13.	Create a function of your own that solves a problem. 
//•	In comments, write what the function does and why you created it.