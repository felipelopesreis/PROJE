
/* import {} from 'phosphor-react' */

import { AddressBook, ImageSquare } from "phosphor-react";
import { Menu } from "../../components/Menu";

import { Title } from "../../Title";
import { Link } from 'react-router-dom'
import { MMenuItem } from "../../components/MenuItem";


export function Homes(){

    return(
    <>
        <header>
                <Title text='Bem vindo'/>
        </header>
            <main>
                
             <Menu>
                    <MMenuItem icon={<AddressBook/>} text="Agenda"/>

                    <Link to='/Gallery'></Link>
                    <MMenuItem icon={<ImageSquare/>} text="Galeria"/>
                </Menu>
             </main>
    </>
    )
}
