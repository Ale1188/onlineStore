import logo from './logo.svg';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import About from './pages/about';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Catalog></Catalog>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;