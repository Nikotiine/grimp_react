import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={'Navbar'}>
            <nav className="navbar is-primary " role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <button className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                        <Link to={'/home'} className={"button is-outlined is-rounded"}>Accueil</Link></div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                               <Link to={'/auth/register'} className={'button is-outlined is-link'}>S'enregister</Link>
                                <Link className={'button is-link is-light'} to={'/auth/login'}>
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;