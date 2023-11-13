//import Conectar from '../../Controls/Ven';
import img from '../../Images/logo.png'
import axios from   'axios'
import {useState} from 'react'




function ConectarWats(){
    const URL = process.env.REACT_APP_URLDEFAULT+"/CriarVen"
    
     const[QRCode ,SetQR] = useState();

     const GerarQR=()=>{//Gerando o QR Code do lado do Servidor e capturando o BASE64

        axios.post(URL,{Nome:'ULTRA1'}) 
        .then(qr=>{ SetQR(qr.data);console.log(qr.data)})
        .catch(err=>{console.error(err)})
    
    } 


    return(<>
    <div className="container-fluid">
        <img src={undefined === QRCode? img : QRCode} alt="QR Code Conexao"/>
        <button  type="button" className='btn btn-success' onClick={()=>{GerarQR()}}>Gerar QR CODE</button>
    </div>
    </>)
}

export default ConectarWats;