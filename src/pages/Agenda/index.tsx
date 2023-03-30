import { Cartao } from "../../components/Cartao";
import { Contato } from "../../components/Contato";
import { getContacts } from "../../services/api";
import { Title } from "../../Title";


export function Agenda(){

    const[search,setSearch] = useState('')
    const [contacts, setContacs]= useState<Contact[]>([])
 
    useEffect(()=>{
        async function listContacts(){
            setContacs(await getContacts())
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
       
           <Contato>
           
           {
            contacts.map(contact => {
              return <Cartao contactData={contact} />
            })
          }
        
           
                
          </Contato>
    </main>
        
    </>
    )

}