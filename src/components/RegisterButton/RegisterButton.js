import { RegisterButtonStyle as ButtonComponent } from './style'

export default function RegisterButton({children, ...props}){
    return(
        <ButtonComponent>
            {children}
        </ButtonComponent>
    )
}