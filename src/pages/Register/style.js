import styled from 'styled-components'

export const Header = styled.header`
    height: 18vh;
    background-color: #064d8b;

    h1{
        font-size: 18vh;
        margin-left: 7vw;
        font-weight: bold;
        color: #FDBD37;
    }
`

export const Conteudo = styled.div`
    background-color: #FFF0DB;
    height: 82vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .conteudoDiv{
        width: 35vw;
        height: 45vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
    }

    .backForHome{
        margin-left: 5vw;
        height: 10vh;
        position: fixed;
        left: 0px;
        bottom: 0px;
        display: flex;

    }
`