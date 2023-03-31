import { useEffect, useState } from "react";
import { Cartao } from "../../components/Cartao";
import { Contato } from "../../components/Contato";
import { getContacts } from "../../services/api";
import { Title } from "../../Title";


export function Agenda(){

    const[search,setSearch] = useState('')
    const[isLoanding, setIsLoanding] = useState<Boolean>(false)
    const [contacts, setContacs]= useState<Contact[]>([])

    const filteredContacts = ()=>{
        
    }
 
    useEffect(()=>{
        async function listContacts(){
            setIsLoanding(true)
            setContacs(await getContacts())
            setIsLoanding(false)
            console.log(contacts)
        }

        listContacts()
    },[])


   
    return(
        <>
        <header>

          
        
    <Title text="Agenda de contatos"></Title>
    </header>
    <main>

    <input type="search" className="pesquisar" />
       
           {
            isLoanding? <CircularProgress /> :
            (
                <Contato>
           
           {
            contacts.map(contact => {
              return <Cartao key={contact.login.uuid} contactData={contact} />
            }) 
          }
          
            )
        }
        
        
          </Contato>
    </main>
        
    </>
    )

}