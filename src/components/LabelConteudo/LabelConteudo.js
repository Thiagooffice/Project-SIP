
import { LabelConteudo } from './style'

export default function Label({children, ...props}){
    return(
        <LabelConteudo {...props} >{children}</LabelConteudo>
    )
}