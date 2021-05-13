import './App.css';
import Dashboard from './Dashboard';
import Testimony from './Testimony';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;