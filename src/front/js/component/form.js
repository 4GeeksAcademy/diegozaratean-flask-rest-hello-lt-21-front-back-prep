import React , {useState, useContext}from "react";
import {Context} from '../store/appContext'
import { Navigate } from 'react-router-dom'


export const Form = () => {
    const [email,setEmai] = useState('')
    const [password,setPassword] = useState('')

    const {actions,store} = useContext(Context)

    function sendData(e){
        e.preventDefault()
        console.log('Send Data')
        console.log(email, password)
        actions.login(email, password)

 
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(
        //         {
        //             "email":email,
        //             "password":password
        //         }
        //     )
        // };
        // fetch('https://jubilant-guide-r4445wr46g9f574j-3001.app.github.dev/api/login', requestOptions)
        //     .then(response => response.json())
        //     .then(data => console.log(data));

    }
	return (
		<nav className="">
			<div className="container">
                { store.auth === true ? <Navigate to='/demo'/> : 
                <>
                    No estoy logeuado
                    <h1>Formulario</h1>
                    <form onSubmit={sendData}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={email} onChange={(e)=>setEmai(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                        </div>                    
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </>                              
                }				
				
			</div>
		</nav>
	);
};
