import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {userAccountService} from "@/_services/user.account.service";


const UserNavbar = () => {
    let navigate = useNavigate();
    const logout =()=>{
        userAccountService.logout()
        navigate('/')
    }
    return (
        <div className={'UserNavbar'}>
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
                            <Link to={'/grimper/home'} className={"navbar-item"}>Accueil</Link>
                            <Link to={'/grimper/profil'} className={"navbar-item"}>Profil</Link>

                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">

                                    <button className={'button is-danger is-light'} onClick={logout}>Log out </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default UserNavbar;