import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router 
} from 'react-router-dom'
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router className="App">
      <NavBar/>
    </Router>
  );
}

export default App;