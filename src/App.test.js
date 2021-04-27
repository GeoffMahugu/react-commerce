import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// import React, { useState, useCallback } from 'react';
// import classnames from 'classnames';
// // you should import `lodash` as a whole module
// import { debounce } from 'lodash';
// import axios from 'axios';

// const ITEMS_API_URL = 'https://example.com/api/items';
// const DEBOUNCE_DELAY = 500;

// // the exported component can be either a function or a class
// export default function Autocomplete() {
//   const [value, setValue] = useState('');
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const searchValue = event => {
//     const { value: nextValue } = event.target;
//     setValue(nextValue);
//     queryResults(nextValue);
//   };

//   const queryResults = useCallback(
//     debounce(nextValue => sendRequest(nextValue), DEBOUNCE_DELAY),
//     [],
//   );



//   const sendRequest = async (nextValue) => {
//     setIsLoading(true);
//     const results = await axios.get(`${ITEMS_API_URL}?q=${nextValue}`);
//     console.log(results);
//     const { data } = results;
//     setItems(data);
//     setIsLoading(false);
//   };

//   return (
//     <div className="wrapper">
//       <div className="control">
//         <input type="text" value={value} onChange={searchValue} className={`input ${isLoading ? 'isLoading' : ''}`} />
//       </div>

//       { items.length ? <div className="list is-hoverable" >
//         {items.map((value, index) => { return <a onClick={() => props.onSelectItem(value)} class="list-item" key={index}>{value}</a> })}
//       </div>
//         : null}
//     </div>
//   );
// }