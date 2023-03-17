import './style.css'
type MenuItemProps = {
    icon:React.ReactNode
    text: String
}
export function MMenuItem({icon,text}:MenuItemProps){
    return(
        <>
            <a href="#" className="menuItem">
            {icon}{text}
            </a>
        </>
    )
}