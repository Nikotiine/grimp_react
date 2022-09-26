import React from 'react';
import {Link} from "react-router-dom";

const UserEditPassword = () => {
    return (
        <div className={'UserEditPassword box max-50 mx-auto mt-6'}>
            <form>
                <div className="field">
                    <label className="label">Ancien mot de passe</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            name={'plainPassword'}
                            placeholder="********"

                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Confirmer mot de passe</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            name={'plainPassword'}
                            placeholder="********"

                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nouveau mot de passe</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            name={'plainPassword'}
                            placeholder="********"

                        />
                    </div>
                </div>
                <div className="field is-grouped is-justify-content-flex-end">
                    <div className="control">
                        <Link to={'/grimper/profil'} className={'button is-link is-light'}>Annuler</Link>
                    </div>
                    <div className="control">
                        <button className="button is-link" type={'submit'} >Valider</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserEditPassword;