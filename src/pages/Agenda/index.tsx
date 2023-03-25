import { Cartao } from "../../components/Cartao";
import { Contato } from "../../components/Contato";
import { getContacts } from "../../services/api";
import { Title } from "../../Title";


export function Agenda(){

    async function test(){
        console.log(await getContacts())
    }
    test()

    return(
        <>

         <header>
                <Title text='Agenda de contatos'></Title>
            </header>
            <main>
                <input type="search" className="inputSearch"/>
                <Contato>
                    <Cartao nome="aou">

                    </Cartao>
                </Contato>
        </>
    )


}