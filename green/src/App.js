import './App.css';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Testimony from './Testimony';
import ScrollToTop from "react-scroll-to-top";
import CardsGrid from './CardsGrid';
import CardHeading from './CardHeading';
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
     <Dashboard/>
     <Testimony/>
     <CardHeading/>
     <CardsGrid/>
     <Footer/>
    </div>
  );
}

export default App;