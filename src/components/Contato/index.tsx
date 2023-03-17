import './estiloContato.css'
type ContatosSalvos ={
    children:React.ReactNode
}

export function Contato({children}:ContatosSalvos){
    return(
        <header id="atributos">
                {children}
            </header>
    )
}