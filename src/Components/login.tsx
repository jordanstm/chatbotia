import  { useState } from 'react'
import {Card,Form,InputGroup,Button} from 'react-bootstrap'

import Realizalogin from './Js/Login'; 
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Login(){
   
   const navigate = useNavigate();
   const[usuario,Setusuario] = useState<String>('');
   const[senha ,Setsenha] = useState<String>('');

    const handleUsuario = (event:any)=>{ Setusuario(event.target.value) }
    const handleSenha = (event:any)=>{Setsenha(event.target.value)}
    const [showPass,setShowpass] = useState(false);

    const [validated, setValidated] = useState(false);

    function clickHandler(){
      setShowpass(true);
    }

    function Menssagens(Messagem:string){
      const MySwal = withReactContent(swal);
      MySwal.fire({
          title:'Erro!',
          text:Messagem,
          icon:'error',
          confirmButtonText:'OK'});
    }


    const Logar=()=>{
       let logins ={ Usuario: usuario.trim() , Senha: senha.trim()} // Primeira forma  de resolver melhor forma
      
   

      
     let resultado = Realizalogin( logins);
       
       if(resultado){
         navigate("/Principal");
       }
       else{
        Menssagens("'Usuario' ou 'Senha' inválido!");
       }
    }

    const handleSubmit = (event:any) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <Card>
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
          autoComplete='true'
          onChange={(e)=>{handleSenha(e)}}
         
        /> 
              
    <InputGroup.Text>
        <i onClick={clickHandler} className={showPass ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
    </InputGroup.Text>


      </InputGroup>
      <Button variant="success" className="mb-6" onClick={()=>{Logar()}}> Login</Button>
      <div className='cad'>Ainda não tem Cadastro clique <a href='/Cadastro'><strong>Aqui</strong></a></div>
          </Card.Body>
    </Card>
    </Form>
    )
}

export default Login;