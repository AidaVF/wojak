import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Token from './components/token';
import About from './components/about';
import Roadmap from './components/Roadmap';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Token />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
