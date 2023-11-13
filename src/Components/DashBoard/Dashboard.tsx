import Card from 'react-bootstrap/Card';

function Dash(){
     return (<>
     <Card className='Totais  w-10 h-25 '>
          <Card.Body>
            <h5 className='Nomeotal'>Total de atividade</h5>
            <h1 className='Val'>0</h1>
          </Card.Body>
        </Card>
        <Card className='Totais  w-10 h-25'>
        <Card.Body >
            <h5 className='Nomeotal'>% Elementos Ativos</h5>
            <h1 className='Val'>0</h1>
          </Card.Body>
        </Card>

        <Card className=' Totais  w-10 h-25'>
          <Card.Body>
            <h5 className='Nomeotal'>% Respostas efetivas</h5>
            <h1 className='Val'>0</h1>
          </Card.Body>
        </Card>
        <Card className='Totais w-10 h-25'>
          <Card.Body>
            <h5 className='Nomeotal'>% Clientes Ativos</h5>
            <h1 className='Val'>0</h1>
          </Card.Body>
        </Card>
     </>)
}

export default Dash;