import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoadingState] = useState(false);
    useEffect(() => {
        setLoadingState(true);
        setTimeout(() => {
            console.log('COMPONENT LOAD');

            setProducts([
                { name: "Product 1", id: 1 },
                { name: "Product2", id: 2 },
                { name: "Product 3", id: 3 },
            ]);
            console.log(products);
            setLoadingState(false);
        }, 5000);
    }, []);

    return (
        < div >
            <h4>List of Products</h4>
            {loading ? <div>Loading products....</div> : <>{products && <ul style={{ listStyle: 'none' }}>{products.map((product) => { return <li key={product.id}>{product.name}</li> })}</ul>}</>}
        </div >
    )
}

export default ProductList;