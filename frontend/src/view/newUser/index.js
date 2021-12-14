import React, {useState} from 'react';
import 'firebase/auth';
import './newUser.css';
import Navbar from '../../components/navbar';

import api from '../../services/api';

function NewUser() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleRegister(e) {
        e.preventDefault();
    
        const data = {
            name,
            email,
            senha                        
        };
    
        try {
            await api.post('users', data);   
            alert('Usuário cadastrado com sucesso');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return(
        <>
        <Navbar />
        <div className="form-cadastro">
            <form onSubmit={handleRegister} className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>
                <input value={name} onChange={(e) =>setName(e.target.value)} type="name" className="form-control my-2" placeholder="Nome"/>
                <input value={email} onChange={(e) =>setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Digite seu email"/>
                <input value={senha} onChange={(e) =>setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Crie uma senha"/>                

                <button className="btn btn-lg mt-3 mb-5 btn-cadastro" type="submit">Cadastrar</button>
            </form>
        </div>
        </>
    )
}

export default NewUser;