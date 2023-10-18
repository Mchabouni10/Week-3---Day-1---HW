// 1. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns 
//the largest of them. Again, the Math.max method is not allowed
/*
const maxof3numbers = function(a,b,c){ // give our function name for maxof3numbers
    if (a>b && a>c) {    // first condition if a superior than b and is superior than c
        return a;        // we return a as result
    }
    else if (b>a && b>c) { //second condition if b superior than a and superior than c
        return b;           // we return b as condition 
    }
    else {
        return c;   //otherwise wil return c because c in superior than a and be in this case
    }
};
result = maxof3numbers(33,88,57); // give a random numbers we choose for a, b and c 
console.log("The Higher of 3 numbers is : " + result); //the  we get after running it
*/







//2. Define a function, as a function expression, 
// sumArray that takes an array of numbers and returns the sum of those numbers.
/*
const sumArray = function(Arraynumbers) {  //function called sumArray and Arraynumbers are the elements of our Array
    let sum = 0; 
    for (let i = 0; i < Arraynumbers.length; i++) {  //for loop to iterate through the array, adding each element to the sum variable
      sum += Arraynumbers[i];
    }
    return sum;  //we return the sum of our Array element
  };
  const Arraynumbers = [4, 7, 1, 2, 5]; //give a random choosed number to our Array elements 
  const result = sumArray(Arraynumbers);  // give result as the sum of our Array elements
  console.log("the sum of my array elements is :" + result); //show the final result
  */






  //3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument 
  //  and returns true if it is a vowel, false otherwise.
  /*
  function charVowel(char) {  //function called charVowel
    return ['a', 'e', 'i', 'o', 'u'].includes(char); //checks if it is one of the vowels ('a', 'e', 'i', 'o', or 'u'). It returns 
  }
  const char1 = 'a'; //has a vowel return true
  const char2 = 'c'; //doesn't have a vowel return false
  console.log("the first char has a vowel:" + charVowel(char1)); 
  console.log("the second char doesn't has a vowel:" + charVowel(char2));
  */






//4. Define a function, as a function expression, 
// numArgs that returns the number of arguments passed to the function when called.
/*
  const numArgs = function() { //function called numArgs to count the number of argument inside
    return arguments.length;  //use arguments.lenght contains the number of arguments passed to the function learn it from mozzila develpper 
  };
  console.log(numArgs("dog","cat","horse","lion")); //we have 4 arguments inside our function
  console.log(numArgs(2,7,9,4,3));  //we have five differents arguments inside our function
  console.log(numArgs('home',1,'car',3,'sofa','tv')); //mixed between numbers argument and strings should return 6
  console.log(numArgs()); //empty function should return zero
  */



  


//5. Define a function, as a function declaration, 
//reverseString that takes a string, reverses the characters, and returns it
  function reverseString(strings) {    //function called reverString 
    return strings.split('').reverse().join(''); // use function built split to split into array of character
  }  //use function reverse to revere the elements inside the array, in final use function built to rearange the 
    // the splited reversed elemets in array
  
  const TheStringToRiverse = 'mouloud'; //put the string we want to reverse 
  const reversedString = reverseString(TheStringToRiverse); // call the function reversString to do the reversement 
  console.log(reversedString);  //to display the string reversed 