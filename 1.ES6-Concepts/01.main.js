//Sunday-July-21, 14:45:51


  //============================== Logical AND (&&)===========================
  //The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
//More generally, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.

// function getName(name) {
//     return name;
//   }
  
//   let a = false;
//   let b = false;
  
//   console.log(a && getName("Bruno Mars"));


//============================== Logical OR (||)===========================
//The logical OR (||) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true.
// It is typically used with boolean (logical) values. When it is, it returns a Boolean value. However, the || operator actually returns the value of one of the specified operands,
// so if this operator is used with non-Boolean values, it will return a non-Boolean value.



function getName(name) {
    return name;
  }
  
  let a = false;
  let b = false;
  
  console.log(a || b);



  //===================Template literals============================
  //Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
//Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders).
// However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.


let name1 = "Kath";
let name2 = "Bloom";
//  console.log(name1 + " " + name2);
console.log(`${name1} ${name2}`);





//============================Ternary Operator=============================
//-------------how we do normally.
const showRecipeOne = false;  //if true the value will coke

function getRecipeOneName(recipeName) {
  return recipeName;
}

function getRecipeTwoName(recipeName) {
  return recipeName;
}

if (showRecipeOne) {
  console.log(getRecipeOneName("Pizza"));
} else {
  console.log(getRecipeTwoName("Coke"));
}



//-------------Vs ternary operator.
showRecipeOne
  ? console.log(getRecipeOneName("Pizza"))
  : console.log(getRecipeTwoName("Coke"));

  //The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?),
  // then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
  // This operator is frequently used as an alternative to an if...else statement.










 

