import React from 'react';

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
                        Membre depuis {profil.createdAt}
                    </div>
                </div>
                <footer className="card-footer">
                    <button onClick={edit} className="card-footer-item">Edit</button>

                </footer>
            </div>
        </div>
    );
};

export default UserProfilCard;