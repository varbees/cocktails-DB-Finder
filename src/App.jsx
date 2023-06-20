import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';
// components
import Navbar from './components/Navbar';
import Search from './components/Search';
import Loading from './components/Loading';
import Cocktail from './components/Cocktail';
import Cocktails from './components/Cocktails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/cocktail/:id' element={<SingleCocktail />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
