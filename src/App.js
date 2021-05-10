import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={Projects} />
        <Route path='/articles' component={Articles} />
        <Route path='/about' component={About} />
        <h1>My Portfolio</h1>
        <h2>Coming Soon!</h2>
        <h3>CI Test</h3>
        <nav>
          <img src={logo} className='logo' alt='Logo Image' />
          <div className='navigation-sub'>
            <Link to='/' className='item'>
              Projects
            </Link>
            <Link href='/articles' className='item'>
              Articles
            </Link>
            <Link href='/about' className='item'>
              About
            </Link>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
