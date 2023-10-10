export default function Realizalogin(Param){
   
    
     if(Param.Usuario ==='Teste'&& Param.Senha==='123')
    return true;
else{
    console.log("Erro de login, o usuario é :'"+Param.Usuario+"' a senha é '"+Param.Senha+"'");
}
}