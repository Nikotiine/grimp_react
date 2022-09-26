import React, { useState } from 'react';

import {authAccountService} from "@/_services/auth.account.service";
import UserForm from "@/components/form/UserForm";
const Register = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        firstName: '',
        lastName: '',
        plainPassword: '',

    });

    function onChange (e){
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        authAccountService.register(credentials).then((res)=>console.log(res))
        console.log(credentials);
    };

    return (
        <div className={'Register'}>
            <div className="box mx-auto max-50 mt-6">
                <h2 className={'title is-3'}>Creer un compte</h2>
                <form onSubmit={onSubmit}>
                    <UserForm onChange={onChange} credentials={credentials}/>
                </form>
            </div>
        </div>
    );
};

export default Register;