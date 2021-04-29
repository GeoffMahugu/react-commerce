import './App.css';
import CountButton from './components/count_btn';
import SearchBar from './components/search_bar';
import Footer from './components/footer';
import GitHubUser from './components/github_user';
function App() {
  return (
    <div className="App">
      <h2>React Demo Application</h2>
      <SearchBar />
      <br />
      <CountButton />
      <GitHubUser />
      <Footer />
    </div>
  );
}

export default App;
