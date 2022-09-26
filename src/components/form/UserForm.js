import React, {useState} from 'react';

const UserForm = ({profil}) => {


    const [credentials,setCredentials] = useState({
        firstName: profil.firstName ? profil.firstName : '',
        lastName: profil.lastName ? profil.lastName : '',
        email: profil.email ? profil.email : '',
        password: ''
    })
    const onChange = (e)=> {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }


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
            </div>
            <div className="field is-grouped is-justify-content-flex-end">
                <div className="control">
                    <button className={'button is-link is-light'} >Annuler</button>
                </div>
                <div className="control">
                    <button className="button is-link" type={'submit'}>Modifier</button>
                </div>
            </div>
        </div>
    );
};

export default UserForm;