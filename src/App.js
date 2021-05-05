import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { VscHome, VscAdd, VscListUnordered, VscOrganization } from "react-icons/vsc";

import './App.css';
import Home from './components/home';
import CountButton from './components/count_btn';
import SearchBar from './components/search_bar';
import Footer from './components/footer';
import GitHubUser from './components/github_user';
import Page404 from './components/404';
function App() {
  return (
    <Router >
      <div className="App">
        <div className="header-wrapper">
          <h2>React Demo Application</h2>
        </div>
        <div className="container">
          <div className="nav-wrapper">
            <ul style={{ listStyle: 'none' }}>
              <li>
                <VscHome /><Link exact to={`/`}>Home</Link>
              </li>
              <li>
                <VscAdd /> <Link to={`/counter`}>Counter</Link>
              </li>
              <li>
                <VscListUnordered /> <Link to={`/products`}>Products</Link>
              </li>
              <li>
                <VscOrganization /> <Link to={`/users`}>GitHub User</Link>
              </li>
            </ul>
          </div>
          <div className="main-container">
            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
              <Route exact path="/counter" >
                <CountButton />
              </Route>
              <Route exact path="/products">
                <SearchBar />
              </Route>
              <Route exact path="/users" >
                <GitHubUser />
              </Route>
              <Route path="*" >
                <Page404 />
              </Route>
            </Switch>
            <Footer />
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;
