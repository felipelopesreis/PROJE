import './estiloCartao.css'

type ContactCardProps ={
    contactData: Contact
}
export function Cartao({contactData}:ContactCardProps){




    const {name,email,picture} = contactData
    return(
    <>
        <div className="estiloCartao">
            <img src={picture.medium}/>
            <div className='informacoes'>
               <h2>{name.first}</h2>
              <p>{email}</p>
           
             </div>
        </div>
    </>
    )
    
}
