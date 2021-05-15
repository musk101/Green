import './App.css';
import ScrollToTop from "react-scroll-to-top";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from './Logo.svg';

function App() {
  return (
    <div className="App">
        <ScrollToTop smooth color="#34c25E" />
     <header class="header">
		<h1 class="logo">
      <a href="#"><img src={Logo} alt=""/></a>
      </h1>
      <ul class="main-nav">
          <li><a href="#">Work</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#" className="lets_talk">Let's Talk</a></li>
      </ul>
	</header>
  <Router>
  <Switch>
              <Route exact path='/' component={Page1} />
              <Route exact path='/design' component={Page2} />
     </Switch>

    </Router>
  </div>
  );
}

export default App;