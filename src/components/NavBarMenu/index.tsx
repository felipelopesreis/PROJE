import {House, User, Gear} from 'phosphor-react'
import './style.css'
export function NavBarMenu(){
    return(
        <>
        <nav className="navbar-menu">
        <a title="Inicio" href="#">
            <House/>
        </a>
        <a title="perfil" href="#">
            <User/>
        </a>
        <a title="configurações" href="#">
            <Gear/>
        </a>
        </nav>
        </>
    )
}