import { Button } from "../../components/Button";
import { Title } from "../../Title";

export function Home(){

    return (
        <>
       <header>
            <Title text="Bem vindo"></Title>
        </header>
        <main>
            <div className="action-buttons">
                <Button text="Login" type='primary'/>
                <Button text="Cadastro" type='default'/>
            </div>
        </main>
    </>
    )
}