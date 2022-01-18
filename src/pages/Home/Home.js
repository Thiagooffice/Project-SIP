

import Button from "../../components/BotaoHome/BotaoHome";
import ContainerRegister from "../../components/ContainerRegister/ContainerRegister";
import Input from "../../components/InputConteudo/InputConteudo";
import Label from "../../components/LabelConteudo/LabelConteudo";
import { Header, Warning, Conteudo } from "./style";


function Home() {
  return (
    <>
      <Header>
        <h1>SIP</h1>
      </Header>
      <Warning>
        <p>Preencha um dos campos e clique em <strong>pesquisar.</strong> Atenção não digite pontos, traços ou barras.</p>
      </Warning>

      <Conteudo>

        <div className="conteudoDiv">

          <Label>Nº Processo</Label>
          <Input placeholder="00000000000000000" 
          quantidade="18"
          />

          <Label>Nº Benefício</Label>
          <Input placeholder="000.000.000-0" 
          quantidade="10"
          />

          <Label>CPF</Label>
          <Input placeholder="000.000.000-00" 
          quantidade="11"
          
          />

            <Button/>
          
        </div>


          <ContainerRegister/>
        
        


      </Conteudo>
    </>
  );
}

export default Home;
