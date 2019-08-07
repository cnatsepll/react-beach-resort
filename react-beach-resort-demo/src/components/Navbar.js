import React, { Component } from 'react'
import logo from '../images/marketing/vegan_symbol_plain_200.png'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    // setting up the state to manage the navbar toggle on size change
    state={
        // setting a boolean isOpen to false
        isOpen: false
    }
    // handleToggle is a named function and will not fire as it is read in
    handleToggle = () =>{
        // checks if the state of the navbar is open
        // if the navbar is open when handleToggle is called then it will close
        this.setState({isOpen: !this.state.isOpen})
    }
    // render will fire as it is read in
    render() {
        return (
            <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    {/* Link is wrapping around the logo icon
                        when clicked, the app will return to the homepage */}
                    <Link to="/">
                        <img src={logo} alt="connected vegan" className="logo-small"/>
                    </Link>
                    {/* This button will only be visible on small screens.
                        when clicked it will extend the navbar into for access to the links.
                        Button calls the handleToggle() function */}
                    <button type="button" className="nav-btn"onClick={this.handleToggle}>
                        <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
                {/* the list is wrapped in a ul with a ternary class.
                    If we were using more links then it would be appropriate to 
                        consider using an array instead of using an unordered list */}
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
            </div>
            </nav>
        );
    }
}
