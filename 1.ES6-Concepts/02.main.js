//01
//De-structuring

const id = 1;
const productName = "Product Apple Watch";
const rating = 5;
//--------------normal code 
// const product = {
//   id: id,
//   productName: productName,
//   rating:rating,
// };

//--------------Vs shorthand properties;
const product = {
    id,
    productName,
    rating,
  };
 console.log(product);



//02
//-------------De-structuring in objects.

 const product2 = {
    description: "Product 2 description",
    id,
    productName,
    rating,
  };
  
  // const getProductTwoDescription = product2.description;
  // console.log(getProductTwoDescription);
  
  const { description } = product2; //cmd+space with const (shortcut key)
  console.log(description);



  //03
  //----------Normal use 
  const array = [1, 2, 3, 4];
  
  let getArrayFirstValue = array[0];
  let getArraySecondValue = array[1];
  
  console.log(getArrayFirstValue, getArraySecondValue);
  

  //--------------Vs De-structuring
  const [
    arrayFirstElement,
    arraySecondElement,
    arrayThirdElement,
    arrayFourthElement,
  ] = array;
  
  console.log(
    arrayFirstElement,
    arraySecondElement,
    arrayThirdElement,
    arrayFourthElement
  );

  


  