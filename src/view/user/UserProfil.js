import React from 'react';
import {userAccountService} from "@/_services/user.account.service";

const UserProfil = () => {
    const profil = () =>{
       userAccountService.getProfil().then((res)=>console.log(res))
    }
    return (
        <div className={'UserProfil'}>
          <button onClick={profil} className={'button is-link'}>toto</button>
        </div>
    );
};

export default UserProfil;