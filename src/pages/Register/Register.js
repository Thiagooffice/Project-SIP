import { Header, Conteudo } from "./style";
import Button from "../../components/BotaoHome/BotaoHome";
import { Link } from "react-router-dom";
import Label from "../../components/LabelConteudo/LabelConteudo";
import { Warning } from "../Home/style";
import { InputConteudo } from "../../components/InputConteudo/style";

export default function Register(){
    return(
        <>
        <Header>
            <h1>SIP</h1>
        </Header>

        <Warning>
        <p>Preencha os campos com as informações para cadastro.</p>
        </Warning>

        <Conteudo>

        <div className="conteudoDiv">

          <Label moreClose isLittle >Nº Processo
          </Label>
          <InputConteudo placeholder="0000000000000" maxLength="15" />

          <Label moreClose isLittle >Nº do benefício
          </Label>
          <InputConteudo placeholder="000.000.000-0" maxLength="15" />

          <Label moreClose isLittle >Nome
          </Label>
          <InputConteudo   />

          <Label moreClose isLittle >CPF:
          </Label>
          <InputConteudo placeholder="000.000.000-00" maxLength="11" />

          <Label moreClose isLittle >Data de nascimento
          </Label>
          <InputConteudo placeholder="00/00/0000" maxLength="8" />

          <Label moreClose isLittle >Tipo de benefício
          </Label>
          <InputConteudo maxLength="15" />

           
          
        </div>

        <div className="backForHome">
        <Link to="/">
              <Button>Voltar</Button>
        </Link>

        </div>

      </Conteudo>
        </>
    )
}