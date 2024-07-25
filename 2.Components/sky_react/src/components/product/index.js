import ProductItem from "./product_components/product-items";


const dummyProductData = ['Product 1','Product 2','Product 3']

function Productlist(){
    return (<div>
        <h3>React-JS concepts. </h3>
        <ProductItem/>
    </div>
    );
}

export default Productlist;