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
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 7vh;

    .conteudoDiv{
        width: 35vw;
        height: 45vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
    }

    .backForHome{
        margin-left: 9vw;
        height: 0;
        position: absolute;
        left: 0px;
        bottom: 0px;
    }
`
export const Select = styled.select`
    width: 30vw;
    height: 5vh;
    outline: none;
    font-size: 20px;
    margin-bottom: 2.5vh;
    margin-top: 5px;
    color: black;
`

