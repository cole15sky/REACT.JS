//================Default parameters,Spread and rest operators====================

function mulOfTwoNumbers(num1 = 1, num2 = 2) {  
    // console.log(num1, num2);
    return num1 * num2;
  }

  //num1=1 and num2=2 default values
  //Therefore if any other value is pass in below code than the value will override the each variables.
  //Other wise the default value will be working.

  console.log(mulOfTwoNumbers()); //NaN if parameter is (num1,num2)
  console.log(mulOfTwoNumbers(10));
  




//   const array2 = [2, 3, 4];
//   const array3 = [10, 11, 12];
  
//   console.log([999, ...array2, 90, ...array3, 10000]);
   


//---------Normal code
function getInfo1(a,b,c,d,e){
    console.log(a,b,c,d,e)
}
console.log(getInfo1(1,2,3,4,5));



//The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
// In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
//Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

//----------VsSpread-operators
  function getInfo(a, ...c) {
    console.log(a, c);
  
    //code
  
    return "Justin Bieber";
  }
  
  console.log(getInfo(1, 2, 3, 4, 5, 5, 6, 6, 7, 4, 2, 2, 2));
  