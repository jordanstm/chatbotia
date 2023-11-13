import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

import Logo from '../../Images/logo.png'
import Particulas from '../BgAminated/Particulas';
import '../Principal/Principal.css'
import Dash from '../DashBoard/Dashboard';
import ConectarWats from '../Conectar/Conectar';
import CadastroContexto from '../CadastroContexto/CadastroContexto';
import { json } from 'stream/consumers';

function Principal() {
 const [ShowDash,SetShowDash] = useState(true)
 const [ShowConect,SetConect] = useState(false)
 const [ShowCad,SetShowCad] = useState(false);

  const disableOthers=()=>{
    let Other: string = localStorage.getItem('Componente')?? "";
     
     console.log('Assim esta a variavel others',Other);

    switch(Other)
    {
       case "CadastroContexto":
         SetShowDash(false);
         SetConect(false);
         SetShowCad(true);
         break;
        case "Conectar":
          SetConect(true)
          SetShowDash(false);
          SetShowCad(false);
         break;
    }
     
  }
  
function LocalSave(Componente:string){
   localStorage.setItem('Componente',Componente);
    disableOthers();
}
  return (<div className='td' data-bs-theme="dark" >
    <div className='topo'>
      <img src={Logo} className='logotop' alt="Ultra Chat Bot IA" />

      {
        <Navbar data-bs-theme="dark"  expand={false} className=" mb-3 NavUltra text-white ">
          <Container fluid >
            <Navbar.Brand className='text-light ' href="#">Ultra Soluções</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Ultrasoft
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={()=>{ LocalSave('Conectar');}} href="#">Conectar</Nav.Link>
                  <Nav.Link onClick={()=>{LocalSave('CadastroContexto')}} href="#">Cadastrar Contextos</Nav.Link>                  
                  <Nav.Link href="#Relatorios">Relatórios</Nav.Link>                 
                  <Nav.Link onClick={()=>{SetShowDash(true)}} href="#action2">Controle</Nav.Link>                 
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Pesquisar</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
     }
    </div>
    <div  className='Container Bod d-flex ' >
     {  ShowDash  &&  <Dash />  } 

     {  ShowConect && <ConectarWats />  }

     {  ShowCad   && <CadastroContexto/>}

    </div>
   

    <Particulas Cont={"Container"}/>



    
  </div>







  )
}

export default Principal;