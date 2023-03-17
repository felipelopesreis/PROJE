import { useState } from "react"
import { movies } from "./data"
export function Gallery(){
    


    const[imagem, setImagem] = useState(0)
         let movie = movies[imagem]    
    function anterior(){
       if(imagem< movies.length -1){ 
        setImagem(imagem +1)
        }
        else {
            setImagem(0)
        }
    }


    function proxima(){

    if(imagem ==0){     
        setImagem(movies.length -1)
       }
       else{
        setImagem(imagem -1)
       }
    }


    return (
        <>
            <section className="gallery">
                <img src={movie.images.poster}/>
            </section>
            <button onClick={anterior}>Proxima</button>
            <button onClick={proxima}>anterior</button>

            
        </>
    )
}