import React, { useState } from 'react'
import {Card,Form,InputGroup,Button} from 'react-bootstrap'

import Realizalogin from './Js/Login'; 
import { useNavigate } from 'react-router-dom';

function Login(){
   
   const navigate = useNavigate();
   const[usuario,Setusuario] = useState<String>('');
   const[senha ,Setsenha] = useState<String>('');

    const handleUsuario = (event:any)=>{ Setusuario(event.target.value) }
    const handleSenha = (event:any)=>{Setsenha(event.target.value)}

    const Logar=()=>{
       let logins ={ Usuario: usuario.trim() , Senha: senha.trim()} // Primeira forma  de resolver melhor forma
      
   

       //Segunda forma de resulver o problema de inferencia de valor nas propriedades dos Obejetos 
      // interface log  {usuario:String,senha:String };
       
      // var l: log;
      // l ={ usuario : usuario,senha:senha} ;
      
     //console.log("o Usuario é "+logins.Usuario+" e a Senha "+logins.Senha );
     let resultado = Realizalogin( logins);
       
       if(resultado){
         navigate("/Principal");
       }
    }
    return (<Card>
          <Card.Header>
            <p>Login</p>
          </Card.Header>
          <Card.Body>
          <InputGroup className="mb-3">          
        <InputGroup.Text id="basic-addon1">@
        
        </InputGroup.Text>
       
        <Form.Control
          placeholder="Usuario"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=>{handleUsuario(e)}}
        />
      </InputGroup>
      <InputGroup className="mb-3" hasValidation={true}>
      {/* <IMaskInput mask="*" placeholder=' Digite sua senha'></IMaskInput> */}
         <InputGroup.Text  id="basic-addon1">*</InputGroup.Text> 
         <Form.Control
          type="password"
          placeholder="Senha"
          aria-label="Username"
          aria-describedby="basic-addon1"
        
          onChange={(e)=>{handleSenha(e)}}
         
        /> 
      </InputGroup>
      <Button variant="secondary" className="mb-6" onClick={()=>{Logar()}}> Login</Button>
      <div className='cad'>Ainda não tem Cadastro clique <a href='/Cadastro'><strong>Aqui</strong></a></div>
          </Card.Body>
    </Card>
    )
}

export default Login;