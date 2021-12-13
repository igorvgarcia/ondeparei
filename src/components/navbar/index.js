import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';


function Navbar() {
    return(
                <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand text-white" href="#">Onde Parei</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/newuser">Cadastrar <span class="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/login">Login <span class="sr-only">(current)</span></Link>
            </li>
            
            </ul>
            
        </div>
        </nav>
    )
}

export default Navbar;