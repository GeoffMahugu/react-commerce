import React, { useState } from 'react';
import ProductList from './product_list';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };
    let shouldDisplayTxt = searchValue.length > 0;
    return (
        <div>
            <div>
                <label htmlFor="search-product"><b>Search product</b> </label>
                <input type="text" id="search-product" placeholder="Search product" value={searchValue} onChange={handleSearch} />
            </div>
            <ProductList />
        </div>
    )
}

export default SearchBar;