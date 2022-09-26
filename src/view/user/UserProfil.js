import React, {useState} from 'react';
import {useQuery} from "react-query";
import {userAccountService} from "@/_services/user.account.service";
import UserProfilCard from "@/components/user/UserProfilCard";
import UserEditForm from "@/components/user/UserEditForm";


const UserProfil = () => {
    let [edit,setEdit] = useState(true);
    const editProfil = () => {
       setEdit(!edit)
    }
    console.log(edit)
    const {isLoading,error,data} = useQuery('user',userAccountService.getProfil)
    const profil = data || {'data':''}

    console.log(profil)
    return (
        <div className={'UserProfil'}>
            {edit ? <UserProfilCard profil={profil} edit={editProfil}/> : <UserEditForm profil={profil} edit={editProfil}/>}
        </div>
    );
};

export default UserProfil;