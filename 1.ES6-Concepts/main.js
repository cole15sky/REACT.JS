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


  