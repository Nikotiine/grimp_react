import React from 'react';
import {useQuery} from "react-query";
import {userAccountService} from "../../_services/user.account.service";


const UserProfil = () => {

    const {isLoading,error,data} = useQuery('user',userAccountService.getProfil)
    const profil = data || {'data':''}
    console.log(profil)
    return (
        <div className={'UserProfil'}>
            <div className="card max-50">
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
                   
                    <a href="#" className="card-footer-item">Edit</a>
                    <a href="#" className="card-footer-item">Delete</a>
                </footer>
            </div>
        </div>
    );
};

export default UserProfil;