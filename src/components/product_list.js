import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProductState] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setProductState([
                { name: "Product 1", id: 1 },
                { name: "Product2", id: 2 },
                { name: "Product 3", id: 3 },
            ]);
            // console.log('DONE', products)
        }, 100);
    }, []);


    const productsState = products.lenght > 1;
    return (
        <div>
            <h4>List of Products</h4>
            {productsState ? <ul>{products.map((product) => { return <li key={product.id}>{product.name}</li> })}</ul> : <div>Loading....</div>}
        </div>
    )
}

export default ProductList;