import React from "react";
import { NavDropdown } from "react-bootstrap";
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
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>

                            <NavDropdown id="nav-dropdown-dark-example"
                                title="Cats"
                                menuVariant="dark"
                            >

                                {/* <NavDropdown.Menu> */}
                                <NavDropdown.Item ><NavLink className="nav-link" to="/scottish">
                                    Scottish Fold
                                </NavLink></NavDropdown.Item>
                                <NavDropdown.Item ><NavLink className="nav-link" to="/british">
                                    British
                                </NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink className="nav-link" to="/ragdoll">
                                    Ragdoll
                                </NavLink></NavDropdown.Item>
                                {/* </NavDropdown.Menu> */}
                            </NavDropdown>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;