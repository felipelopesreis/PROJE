
/* import {} from 'phosphor-react' */

import { AddressBook, ImageSquare } from "phosphor-react";
import { Menu } from "../../components/Menu";

import { Title } from "../../Title";
import { Link } from 'react-router-dom'
import { MMenuItem } from "../../components/MenuItem";

import { BaseLayout } from "../../layout/BaseLayout";
export function Homes(){

    return(
    <>
    <BaseLayout appBarTitle="Dashboard">
    
                
             <Menu>
                    <link to='/contacts'>
                    <MMenuItem icon={<AddressBook/>} text="Agenda"/>
                    </link>

                    <Link to='/Gallery'>
                    <MMenuItem icon={<ImageSquare/>} text="Galeria"/>
                    </Link>
                </Menu>

             </BaseLayout>   
             
    </>
    )
}
