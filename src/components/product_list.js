import React, { useState } from 'react';
const produts = [
    { name: "Product 1", id: 1 },
    { name: "Product2", id: 2 },
    { name: "Product 3", id: 3 },
]
const ProductList = () => {
    return (
        <div>
            <h4>List of Products</h4>
            <ul>
                {
                    produts.map((product) => {
                        return <li key={product.id}>{product.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList;