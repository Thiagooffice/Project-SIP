import { Link } from 'react-router-dom'
import RegisterButton from '../RegisterButton/RegisterButton'
import { RegisterContainer } from './style'

export default function ContainerRegister(){
    return(
        <RegisterContainer>

            <h1>Cadastrar um processo</h1>
            <Link to="/register">
                <RegisterButton>
                    Cadastrar
                </RegisterButton>
            </Link>

        </RegisterContainer>
    )
}