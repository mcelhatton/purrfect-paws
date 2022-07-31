import React from "react"
import { Link } from "react-router-dom"
import Auth from "../../utils/auth"

function Nav() {
    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul id="srvlog" className="flex-row">
                    <a className="mx-1">
                        <Link to="/products">Services</Link>
                    </a>
                    <a id="lgout" className="mx-1">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </a>
                </ul>
            )
        } else {
            return (
                <ul id="loginout" className="flex-row">
                    <a className="mx-1">
                        <Link to="/login">Login</Link>
                    </a>
                    <a id="lgout" className="mx-1">
                        <Link to="/signup">Signup</Link>
                    </a>
                </ul>
            )
        }
    }

    return (
        <header className="flex-row px-1">
            <h1>
                <Link to="/">Purrfect-Paws-Grooming-Center</Link>
            </h1>

            <nav>{showNavigation()}</nav>
        </header>
    )
}

export default Nav
