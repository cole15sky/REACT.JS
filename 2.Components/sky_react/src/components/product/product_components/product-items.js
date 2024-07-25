function ButtonComponent(){
    return(
    <button>Click me!</button>    
    )
}

//Nested Components; App->product list -> product-item -> buttonComponents.

function ProductItem(){
    return(
        <div>
            <p> Product 1</p>
            <ButtonComponent/>
        </div>
    );
}


export default ProductItem;