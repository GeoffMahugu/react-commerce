import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [productState, setProductState] = useState(false);
    useEffect(() => {
        // setTimeout(() => {
        //     setProducts([
        //         { name: "Product 1", id: 1 },
        //         { name: "Product2", id: 2 },
        //         { name: "Product 3", id: 3 },
        //     ]);
        //     // console.log('DONE', products)
        //     setProductState(products.lenght > 1);
        // }, 100);
        setProducts([
            { name: "Product 1", id: 1 },
            { name: "Product2", id: 2 },
            { name: "Product 3", id: 3 },
        ]);
        console.log(products);
        setProductState(true);
        // console.log('DONE', products)
    }, []);

    return (
        < div >
            <h4>List of Products</h4>
            {/* { products.lenght ? <ul>{products.map((product) => { return <li key={product.id}>{product.name}</li> })}</ul> : <div>Loading....</div>} */}
            { productState ? <ul>{products.map((product) => { return <li key={product.id}>{product.name}</li> })}</ul> : <div>Loading....</div>}
        </div >
    )
}

export default ProductList;