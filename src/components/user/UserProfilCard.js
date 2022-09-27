import React from 'react';
import {Link} from "react-router-dom";
import Moment from 'react-moment';

const UserProfilCard = ({profil,edit}) => {


    return (
        <div>
            <div className="card max-50 mx-auto mt-6">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{profil.firstName} {profil.lastName}</p>
                            <p className="subtitle is-6">{profil.email}</p>
                        </div>
                    </div>
                    <div className="content">
                        Membre depuis <Moment date={profil.createdAt} format={"DD/MM/YYYY"}/>
                    </div>
                </div>
                <footer className="card-footer">
                    <button onClick={edit} className="button is-primary card-footer-item">Modifer mon profil</button>
                    <Link to={'/grimper/profil/change-password'} className={'button is-link card-footer-item'}>Changer mon mot de passe</Link>
                </footer>
            </div>
        </div>
    );
};

export default UserProfilCard;