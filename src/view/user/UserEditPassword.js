import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {userAccountService} from "../../_services/user.account.service";
import {authAccountService} from "../../_services/auth.account.service";

const schema = yup.object({
    password: yup.string().required(),
    verifpassword: yup.string().required().oneOf(
        [yup.ref('password'),null],
        "Le mot de passe de confirmation ne correspond pas"
    ),
    plainPassword: yup.string().required(),

})
const UserEditPassword = () => {
    let navigate = useNavigate();
    const {register,handleSubmit,formState:{errors,isValid,isSubmitted}} = useForm({
        mode:'onTouched',
        resolver:yupResolver(schema)
    })

    const onSubmit = data => {
        const credentials = {
            password:data.password,
            plainPassword:data.plainPassword
        }

      if(isSubmitted && isValid){
          console.log('valid form')
         userAccountService.editPassword(credentials)
             .then((res)=>{
                        console.log(res)
                 authAccountService.logout()
                 navigate('/auth/login')
             })
             .catch((err)=>{
                        console.log(err)
             })
      }
    }


    return (
        <div className={'UserEditPassword box max-50 mx-auto mt-6'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label className="label">Ancien mot de passe</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            placeholder="********"
                            {...register("password")}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Confirmer mot de passe</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            placeholder="********"
                            {...register("verifpassword")}

                        />
                    </div>
                    <p className={'help is-danger'}>{errors.verifpassword?.message}</p>
                </div>
                <div className="field">
                    <label className="label">Nouveau mot de passe</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            placeholder="********"
                            {...register("plainPassword")}
                        />
                    </div>
                </div>
                <div className="field is-grouped is-justify-content-flex-end">
                    <div className="control">
                        <Link to={'/grimper/profil'} className={'button is-link is-light'}>Annuler</Link>
                    </div>
                    <div className="control">
                        <button className="button is-link" type={'submit'} disabled={!isValid} >Valider</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserEditPassword;