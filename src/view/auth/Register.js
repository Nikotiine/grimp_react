import React, { useState } from 'react';
import './auth.scss'
import {Link} from "react-router-dom";
import {userAccountService} from "../../_services/user.account.service";
const Register = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        firstName: '',
        lastName: '',
        plainPassword: ''
    });

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        userAccountService.login(credentials).then((res)=>console.log(res))
        console.log(credentials);
    };

    return (
        <div className={'Register'}>
            <div className="box mx-auto max-50 mt-6">
                <h2 className={'title is-3'}>Creer un compte</h2>
                <form onSubmit={onSubmit}>
                    <div className="field">
                        <label className="label">Prenom</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name={'firstName'}
                                placeholder="Votre nom"
                                value={credentials.firstName}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Nom</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name={'lastName'}
                                placeholder="Votre prenom"
                                value={credentials.lastName}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                className="input"
                                type="email"
                                name={'email'}
                                placeholder="ex: alexsmith@gmail.com"
                                value={credentials.email}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                name={'plainPassword'}
                                placeholder="********"
                                value={credentials.plainPassword}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="field is-grouped is-justify-content-flex-end">
                        <div className="control">
                            <Link to={'/home'} className={'button is-link is-light'}>Annuler</Link>
                        </div>

                        <div className="control">
                            <button className="button is-link" type={'submit'}>Valider</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;