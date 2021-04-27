import logo from './logo.svg';
import './App.css';
import CountButton from './components/count_btn';
import SearchBar from './components/search_bar';
// import ProductList from './components/product_list';

function App() {
  return (
    <div className="App">
      <h4>Hello</h4>
      <SearchBar />
      <br />
      <CountButton />

      {/* <ProductList /> */}
    </div>
  );
}

export default App;
