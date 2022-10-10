import React from 'react';
import {Link} from "react-router-dom";


const UserForm = ({onChange,credentials,edit}) => {
    const isEditUserProfil = !!edit

    return (
        <div>
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
            { !isEditUserProfil  &&
                <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input
                        className="input"
                        type="password"
                        name={'plainPassword'}
                        placeholder="********"
                        onChange={onChange}
                    />
                </div>
            </div>}

            <div className="field is-grouped is-justify-content-flex-end">

                <div className="control">
                    {isEditUserProfil ?
                        <button className={'button is-link is-light'} onClick={edit}>Annuler</button>
                        :
                        <Link to={'/home'} className={'button is-link is-light'}>Annuler</Link>
                    }

                </div>
                <div className="control">
                    <button className="button is-link" type={'submit'} >{isEditUserProfil  ? 'Modifier' :'Valider'}</button>
                </div>
            </div>
        </div>
    );
};

export default UserForm;