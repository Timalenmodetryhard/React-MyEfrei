import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  return (
    <Router>  
      <Header />

      <Footer />
    </Router>
  );
}

export default App;