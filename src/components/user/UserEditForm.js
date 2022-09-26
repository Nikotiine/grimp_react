import React, {useState} from 'react';
import UserForm from "../form/UserForm";
import {userAccountService} from "../../_services/user.account.service";


const UserEditForm = ({profil,edit}) => {
    const [credentials, setCredentials] = useState({
        email: profil.email,
        firstName: profil.firstName,
        lastName: profil.lastName,

    });
    function onChange (e){
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(credentials)
        userAccountService.editProfil(credentials).then((res)=> console.log(res))
    }
    return (
        <div>
            <div className="box mx-auto max-50 mt-6">
                <h2 className={'title is-3'}>Modifier un compte</h2>
                <form onSubmit={onSubmit}>
                   <UserForm credentials={credentials} onChange={onChange} edit={edit}/>
                </form>
            </div>
        </div>
    );
};

export default UserEditForm;