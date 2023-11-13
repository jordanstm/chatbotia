import Card from    'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import React from 'react';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
function CadastroContexto (){
    let DataQuestion =[{
                 
       id:1,
        intent:"Saudacao",
        question:"oi,Bom dia",
        linguagem:"pt-br"
    },
    {
        id:2,
        intent:"Saudacao",
        question:"oi,Boa tarde",
        linguagem:"pt-br"
    },
    {
        id:3,
        intent:"Saudacao",
        question:"oi,Boa noite",
        linguagem:"pt-br"
    }
];
    let DataAnswer=[{
        id:1,
        intent:"Saudacao",
        answer:"Olá,Tudo bem, e você como está hoje?",
        linguagem:"pt-bt",
        fk:1
    },
    {
        id:2,
        intent:"Saudacao",
        answer:"Olá,Boa tarde!, e você como está hoje?",
        linguagem:"pt-bt",
        fk:2
    },
    {
        id:3,
        intent:"Saudacao",
        answer:"Boa noite, e você como está hoje?",
        linguagem:"pt-bt",
        fk:3
    }
]
  function PegaResposta(Index:number){
    var R:any = DataAnswer.filter(Resp => Resp.fk== Index)
  
    return (
        R.map((valor:any)=>(
           
            <div key ={valor.id}>
                <strong>Resposta:{R.fk} </strong> {valor.answer}
            </div>
       
 
        )
           
        )
        
    )
  }
  function Menssagens(Messagem:string){
    const MySwal = withReactContent(swal);
    MySwal.fire({
        title:'Sucesso',
        text:Messagem,
        icon:'success',
        confirmButtonText:'OK'});
  }
    return (<>
        <div className='container-fluid w-2 '  data-bs-theme="dark">
            <h1>Cadastro de Contextos</h1>
            <h4>Informe os dialogos conforme vossas nescessidades</h4>
            <Card id='InsereDados' className=' mb-3 w-2'>
             <Card.Header><h1>Contexto (Diálogos)</h1></Card.Header>
             <Card.Body>
            
              <div className='add'>
                <h6>Adicione novos contextos a lista</h6>
                <div>
                    <InputGroup className='mb-3 w-2'>
                        <InputGroup.Text>Intenção. . . . . . . . . . :</InputGroup.Text>
                        <Form.Control aria-label='Informe a inteção do Diálogo'/>
                        </InputGroup>
                         
                        <InputGroup className='mb-3 w-2'>
                        <InputGroup.Text>Questão/Pergunta :</InputGroup.Text>
                        <Form.Control aria-label='Informe a Pergunta'/>
                        </InputGroup>                   

                        <InputGroup className='mb-3 w-2'>
                        <InputGroup.Text>Resposta . . . . .  . . . . :</InputGroup.Text>
                        <Form.Control aria-label='Informe a Resposta'/>
                        </InputGroup> 
                        <Button onClick={()=>{Menssagens("Operação Realizada com êxito !!!")}}>Gravar</Button>
                </div>
              </div>
             
              
             </Card.Body>
            </Card>
            <Card>
            <Card.Header>
            <h1>Perguntas Cadastradas ou Contextos Cadastrados</h1>
            </Card.Header>
            <Card.Body>
            <h4>Lista de Diálogos Cadastrados</h4>
              <div className='ListaQuestions'>
                {       
                DataQuestion.map((Item,index)=>(
                            
                             <ul key = {index} >
                               <div><strong>Inteção: </strong>{Item.intent}</div>
                               <div><strong>Pergunta: </strong>{Item.question}</div>                             
                                {PegaResposta(Item.id)}
                                <div><strong>Lingua: </strong>{Item.linguagem}</div>                         
                              
                             </ul>
                           
                           
                )
                
                )}
              </div>
            </Card.Body>
            </Card>
     
        </div>
    </>)
}

 export default CadastroContexto;