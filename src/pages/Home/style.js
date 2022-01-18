import styled from 'styled-components'

export const Header = styled.header`
    height: 19vh;
    background-color: #064d8b;

    h1{
        font-size: 18vh;
        margin-left: 7vw;
        font-weight: bold;
        color: #FDBD37;
    }
`

export const Warning = styled.div`
    height: 8vh;
    background-color: #fee8b7;
    border-top: 7px double rgb(104, 104, 104);
    border-bottom: 7px double rgb(104, 104, 104);

    p{
        padding: 15px 25px;
        font-size: 18px;
    }
`

export const Conteudo = styled.div`
    background-color: #FFF0DB;
    height: 73vh;
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
`

