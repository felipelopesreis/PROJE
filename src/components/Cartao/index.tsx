import './estiloCartao.css'
type InfoCartao = {
    nome: string

}
export function Cartao({nome}:InfoCartao){


    return(
    <>
<div className="conteudo">
    <img src={"https://randomuser.me/api/portraits/men/29.jpg"}/>
       <div className='InformContatos'>
        <h2>{nome}</h2>
        
    </div>


   
   
</div>


    </>
    )
}