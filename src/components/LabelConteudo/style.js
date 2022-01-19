
import styled from 'styled-components'

export const LabelConteudo = styled.label`
    font-size: ${props => props.isLittle ? "18px" : "25px"};
    font-weight: bold;
    margin-bottom: ${props=>props.moreClose ? "3px" : "5px"};
`