import React from "react";
import { NavLink } from "react-router-dom";

import "../css/navigation.css";

const Navigation = () => {
    return (
        <div data-test='component-navigation'>
            <header>
                <div id="header">
                    <NavLink to="/">
                        <div id="top-logo" className="logo">
                            <p>Questioner</p>
                        </div>
                    </NavLink>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" className="focus">
                                    Login
                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup" className="focus">
                                    Signup
                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navigation;