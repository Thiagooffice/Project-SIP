import { InputConteudo } from './style'

export default function Input(props){
    return(
        <InputConteudo 
        placeholder={props.placeholder} 
        maxLength={props.quantidade}
        />
    )
}