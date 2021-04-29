import './App.css';
import CountButton from './components/count_btn';
import SearchBar from './components/search_bar';
// import ProductList from './components/product_list';
import Footer from './components/footer';
import GitHubUser from './components/github_user';
function App() {
  return (
    <div className="App">
      <h4>Hello</h4>
      <SearchBar />
      <br />
      <CountButton />

      {/* <ProductList /> */}
      <GitHubUser />
      <Footer />
    </div>
  );
}

export default App;
