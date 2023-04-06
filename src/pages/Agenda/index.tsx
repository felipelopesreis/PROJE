import { useEffect, useState, Children, Component, ChangeEvent } from "react";
import { Cartao } from "../../components/Cartao";
import { Contato } from "../../components/Contato";
import { getContacts } from "../../services/api";
import { Title } from "../../Title";
import { CircularProgress, TextField } from "@mui/material";
import { BaseLayout } from "../../layout/BaseLayout";
import { Contact } from "../../Types";


export function Agenda(){

    const[search,setSearch] = useState('')
    const[isLoanding, setIsLoanding] = useState<Boolean>(false)
    const [contacts, setContacs]= useState<Contact[]>([])

    const filterContacts = (contact:Contact)=>{
        return contact.name.first.toLowerCase().includes(search.toLowerCase())
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
      setSearch(event.target.value)
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
       


          <BaseLayout appBarTitle="Agenda de Contatos">
       <TextField fullWidth variant="outlined" label="Pesquisar" onChange={handleChange} value={search}/>
           {
            isLoanding? <CircularProgress/> :
            (
                <Contato>
           
           {
            contacts.filter(filterContacts).map(contact => {
              return <Cartao key ={contact.login.uuid} contactData={contact} />
            }) 
          }
          </Contato>
            )
        }
        
        
          
   
        </BaseLayout>
 
    )

}