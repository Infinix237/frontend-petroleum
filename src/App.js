import './App.css';
import Login from './components/LoginPage';
import Home from './components/Home';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Login />
        <Routes>
            <Route exact path='/home' element={< Home />}></Route>
        </Routes>
    </Router>
  );
  
}

export default App;
