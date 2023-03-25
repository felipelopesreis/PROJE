import './estiloContato.css'
type ContatosSalvos ={
    children:React.ReactNode
}

export function Contato({children}:ContatosSalvos){
    return(
        <>
        <section className="atributos">
                {children}
            </section>

          </>  
    )


}