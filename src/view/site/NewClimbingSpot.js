import React from 'react';
import {climbingSpotService} from "@/_services/climbing.spot.service";
import {useQuery} from "react-query";
import {Link} from "react-router-dom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object({
    name: yup.string().required(),
    approach: yup.number().required().positive().integer(),
    routProfil: yup.number().required().positive().integer(),
    minLevel: yup.number().required().positive().integer(),
    maxLevel: yup.number().required().positive().integer(),
    rockType:yup.number().required().positive().integer(),
    exposure:yup.number().required().positive().integer(),
    equipment:yup.number().required().positive().integer(),
    engagement:yup.number().required().positive().integer(),



})
const NewClimbingSpot = () => {

const queryKey = ['naming']


    const {isLoading,error,data} = useQuery(queryKey,climbingSpotService.getAllParameter)
    let approach = data ? data.approach : []
    let minLevel = data ? data.level : []
    let maxLevel = data ? data.level : []
    let routProfil = data ? data.routProfil : []
    let rockType = data ? data.rockType : []
    let exposure = data ? data.exposure : []
    let equipment = data ? data.equipment : []
    let engagement = data ? data.engagement : []
    const {register,handleSubmit,formState:{errors,isValid,isSubmitted}} = useForm({
        mode:'onTouched',
        resolver:yupResolver(schema)
    })
    const onSubmit = data => {


        const credentials = {
            name:data.name,
            approach:"/api/approch_types/"+ data.approach,
            routProfil:"/api/rout_profils/"+ data.routProfil,
            minLevel:"/api/levels/"+ data.minLevel,
            maxLevel:"/api/levels/"+ data.maxLevel ,
            rockType:"/api/rock_types/"+ data.rockType,
            equipment:"/api/equimpents/"+ data.equipment,
            engagement:"/api/engagements/"+ data.engagement,
            exposure:"/api/exposures/"+ data.exposure
        }
        if(isSubmitted && isValid){
            console.log(credentials)
        climbingSpotService.create(credentials).then((res)=>{
            console.log(res)
        })}
    }



    return (
        <div className={'NewClimbingSpot'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="is-flex is-flex-direction-column mx-auto max-50 mt-6">
                    <div className="field">
                        <input className="input is-primary" type="text"  {...register("name")} placeholder="Primary input"/>
                    </div>
                 <div className="field">
                    <div className="select is-link">
                        <select  {...register("approach")}>
                             <option value={'0'}>Type d'approche</option>
                                 {approach.map((item ,index)=>{
                                    return <option value={item.id} key={index}>{item.name}</option>
                                 })
                                 }
                         </select>
                    </div>
                     <div className="select is-link">
                         <select {...register('routProfil')}>
                             <option>Profil de la falaise</option>
                             {routProfil.map((item,index)=>{
                                 return <option value={item.id} key={index}>{item.name}</option>
                             })}
                         </select>
                     </div>
                </div>
                    <div className="field">
                          <div className="select is-link">
                                <select {...register('minLevel')}>
                                    <option>Niveau mini</option>
                                    {minLevel.map((item,index)=>{
                                        return <option value={item.id} key={index}>{item.name}</option>
                                    })}
                                </select>
                            </div>
                        <div className="select is-link">
                            <select {...register('maxLevel')}>
                                <option>Niveau maxi</option>
                                {maxLevel.map((item,index)=>{
                                    return <option value={item.id} key={index}>{item.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="field">
                            <div className="select is-link">
                                <select {...register('engagement')}>
                                    <option>Engagement des voies</option>
                                    {engagement.map((item,index)=>{
                                        return <option value={item.id} key={index}>{item.name}</option>
                                    })}
                                </select>
                            </div>
                        <div className="select is-link">
                            <select {...register('equipment')}>
                                <option>Equipement en place</option>
                                {equipment.map((item,index)=>{
                                    return <option value={item.id} key={index}>{item.name}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="field">
                            <div className="select is-link">
                                <select {...register('exposure')}>
                                    <option>Exposition du site</option>
                                    {exposure.map((item,index)=>{
                                        return <option value={item.id} key={index}>{item.name}</option>
                                    })}
                                </select>
                            </div>

                            <div className="select is-link">
                                <select {...register('rockType')}>
                                    <option>Type de rocher</option>
                                    {rockType.map((item,index)=>{
                                        return <option value={item.id} key={index}>{item.name}</option>
                                    })}
                                </select>
                            </div>

                    </div>
                    <div className="field is-grouped is-justify-content-flex-end">

                        <div className="control">

                                <Link to={'/home'} className={'button is-link is-light'}>Annuler</Link>


                        </div>
                        <div className="control">
                            <button className="button is-link" type={'submit'} >Valider</button>
                        </div>
                    </div>

             </div>

            </form>
        </div>
    );
};

export default NewClimbingSpot;