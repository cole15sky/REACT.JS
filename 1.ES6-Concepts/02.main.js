
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

