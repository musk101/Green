import './App.css';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Testimony from './Testimony';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
        <ScrollToTop smooth color="#34c25E" />
     <header class="header">
		<h1 class="logo">
      <a href="#">Flexbox</a>
      </h1>
      <ul class="main-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
	</header> 
     <Dashboard/>
     <Testimony/>
     <Footer/>
    </div>
  );
}

export default App;