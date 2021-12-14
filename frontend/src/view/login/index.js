import './login.css'
import React, {useState} from 'react';
import firebase from '../../config/firebase';
import'firebase/auth';
import Navbar from '../../components/navbar';

import { Link, useHistory } from 'react-router-dom';

export default function Login(){
    const[email, setEmail] = useState();
    const[senha, setSenha] = useState();
    const[msgTipo, setMsgTipo] = useState();
    const history = useHistory();

    function autenticar(){
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('ok');
            localStorage.setItem('email', email); 
            
            history.push('/profile');                       
        })
        .catch(erro => {
            setMsgTipo('erro');
        })

    }

    return (
        <>
        <Navbar />
      <div className="login-content d-flex align-items-center">
       <form className="form-signin mx-auto">
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>

        <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">{email}</h1>
        <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">{senha}</h1>
      </div>

      
        <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />          
        <input onChange={(e) => setSenha(e.target.value)}type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />        
        <button className="btn btn-lg btn-login btn-block my-2" onClick={autenticar} type="button">Entrar</button>

        <div className="text-white text-center my-5">
            {
                msgTipo === 'ok' && <span><strong>Uau!!</strong> Voce entrou no sistema!!</span>
            }
            
            {
                msgTipo === 'erro' && <span><strong>Ah!!</strong> Verifique se seu email e senha estão corretos</span>
            }
        </div>



        <div className="option-login mt-4 text-center">
            <a href="#" ClassName="mx-3">Recuperar senha</a>
            <span>&#9883;</span>
            <Link to='newuser' className="mx-3">Quero me cadastrar </Link>
        </div>
    </form>

    </div> 
    </>
    );
}