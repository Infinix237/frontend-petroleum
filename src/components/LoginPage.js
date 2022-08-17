import Home from "./Home";
import {
    Link
  } from 'react-router-dom';

function Login(props) {
    return (
        <Link to="/home">Se connecter</Link>
    );
}

export default Login;