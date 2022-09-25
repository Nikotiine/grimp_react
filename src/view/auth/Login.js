import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {authAccountService} from "@/_services/auth.account.service";

    const Login = () => {
        let navigate = useNavigate();
        const [credentials,setCrendentials] = useState({
            email:'',
            password:''
    })
    const onChange =(e)=>{
       setCrendentials({
           ...credentials,
           [e.target.name]: e.target.value
           })
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        authAccountService.login(credentials)
            .then((res)=> {
                console.log(res)
                authAccountService.saveToken(res.data.token)
                navigate('/grimper')
            })

    }
    return (
        <div className={'Login'}>
            <div className="box mx-auto max-50 mt-6">
                <h2 className={'title is-3'}>Connexion</h2>
                <form onSubmit={onSubmit}>

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
                                name={'password'}
                                placeholder="********"
                                value={credentials.password}
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

export default Login;