import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/user";
import "./NavBar.css";
function NavBar() {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const dispatch = useDispatch();
    return (
        <nav className="navbar">
            {isAuth ? (
                <div className="nav">
                    <div className="logo">
                        BW<span>digital</span>
                    </div>
                    <ul className="menu">
                        <li>
                                <Link to="/Admin">Profil </Link>
                        </li>
                        <li>
                                <Link to="/contactList">Contact List </Link>
                        </li>
                        <li>
                                <Link to="/addProduct">Add Product</Link>
                        </li>

                        <li>
                                <Link to="/" onClick={() => dispatch(logout())}>
                                    Logout
                                </Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="nav">
                    <div className="logo">
                        BW<span>digital</span>
                    </div>
                    <ul className="menu">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                        </li>

                        <li>
                            <a href="#service">Services</a>
                        </li>
                        <li>
                            <a href="#Portfolio">Gallery</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
