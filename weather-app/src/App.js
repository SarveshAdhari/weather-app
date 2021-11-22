import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';


// http://api.weatherapi.com/v1/current.json?key=4681881a970549e4bae51138212011&q=London&aqi=no




function App() {

  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route exact path='/' element={<Home />} />
          </Routes>
          </div>
          <Footer />
      </div>
    </Router>
    
  );
}

export default App;
