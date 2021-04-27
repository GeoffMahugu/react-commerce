import React, { useState } from 'react';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };
    let shouldDisplayTxt = searchValue.length > 0;
    return (
        <div>
            <input type="text" value={searchValue} onChange={handleSearch} />
            {shouldDisplayTxt && <div>{searchValue}</div>}
        </div>
    )
}

export default SearchBar;