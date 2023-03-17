import './estiloCartao.css'
type InfoCartao = {
    nome: string,
    email: String

}
export function Cartao({nome}:InfoCartao){


    return(
    <>
<div className="conteudo">
    <img src={"https://randomuser.me/api/portraits/men/29.jpg"}/>
  
    {nome}
   
   
</div>


    </>
    )
}