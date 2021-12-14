import React, {useState} from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './newUser.css';
import Navbar from '../../components/navbar';

function NewUser() {

    const[email, setEmail] = useState();
    const[senha, setSenha] = useState();
    const[msgTipo, setMsgTipo] = useState();
    const[msg, setMsg] = useState();
    const[carregando, setCarregando] = useState();

    function cadastrar() {
        setCarregando(1);
        setMsgTipo(null);

        if(!email || !senha){
            setMsgTipo('erro');
            setMsg('Voce nao preencheu todos os campos');
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado =>{
            setCarregando(0);
            setMsgTipo('ok');
        }).catch(erro => {
            setCarregando(0);
            setMsgTipo('erro');
            switch(erro.message) {
                case 'Password should be at least 6 characters' :
                    setMsg('A senha deve possuir 6 caracteres ou mais');
                    break;
                case 'The email adress is already in use by another account.' :
                    setMsg('O email escolhido já está sendo usado por outro usuario');
                    break;
                case 'The email adress is badly formatted.' :
                    setMsg('Esse não é um formato válido de email');
                    break;
                default:
                    setMsg('Houve algum erro, tente novamente');
                    break;

            }
        })
    }

    return(
        <>
        <Navbar />
        <div className="form-cadastro">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>
                <input onChange={(e) =>setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Digite seu email"/>
                <input onChange={(e) =>setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Crie uma senha"/>


                {
                    carregando ? <div class="spinner-border text-primary" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                :                 <button type="button" className="btn btn-lg mt-3 mb-5 btn-cadastro" onClick={cadastrar}>Cadastrar</button>

                }
                
            
                <div className="text-black text-center my-5">
            {
                msgTipo === 'ok' && <span><strong>Uau!!</strong> Usuario cadastrado com sucesso!</span>
            }
            
            {
                msgTipo === 'erro' && <span><strong>Ah!!</strong> {msg}</span>
            }
        </div>
            </form>
        </div>
        </>
    )
}

export default NewUser;