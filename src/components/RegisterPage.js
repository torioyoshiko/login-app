import React, {useState} from 'react';
import './css/RegisterPage.css';
import firebaseApp from "../utils/firebaseApp";
import firebase from "firebase";
import { useHistory } from "react-router-dom";


const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const registerUser = async () => {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
        history.push(process.env.PUBLIC_URL + "/list");
    }

    const login = () => {
        history.push(process.env.PUBLIC_URL + "/login")
    }

    return (
        <div className='container'>
            <div className='main'>
                <p className='text'>Welcome</p>
                <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='input-form'/>
                <input placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)}
                       className='input-form'/>
                <button className='button' onClick={registerUser}>Sign Up</button>
                <div className='login-block'>
                    <p className='login-text'>Already with us?</p>
                    <a className='link' onClick={login}>&nbsp; Log In</a>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;
