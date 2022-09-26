import React from 'react';
import UserForm from "../form/UserForm";


const UserEditForm = ({profil,edit}) => {
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('toto')
    }
    return (
        <div>
            <div className="box mx-auto max-50 mt-6">
                <h2 className={'title is-3'}>Modifier un compte</h2>
                <form onSubmit={onSubmit}>
                   <UserForm profil={profil}/>

                </form>
            </div>
        </div>
    );
};

export default UserEditForm;