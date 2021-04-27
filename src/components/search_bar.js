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
            <input type="text" value={searchValue} onChange={handleSearch} />
            <br />
            {shouldDisplayTxt && <div>{searchValue}</div>}
            <br />
            <ProductList />

        </div>
    )
}

export default SearchBar;