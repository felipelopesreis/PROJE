import { Button } from "../../../components/Button";
import { Title } from "../../../Title";

export function Login(){
    return(
        <>
            <header>
                <Title text='Login'></Title>
            </header>
            <main>
                <form>
                    <input type="email" name="email"/>
                    <input type="password" name="senha"/>
                    <Button text="Entrar" type="primary"/>
            
                </form>
            </main>
        </>
    )
}