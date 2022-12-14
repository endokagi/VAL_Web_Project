import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        MONEY
                    </NavLink>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link">Cats</NavLink>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link" to="/cats">CAT</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about"> About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cats">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;