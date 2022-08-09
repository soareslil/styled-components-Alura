import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo/index";
import Conta from "../Conta";

const ContainerDiv = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Container = () => {
  return (
    <ContainerDiv>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
      </Conteudo>
    </ContainerDiv>
  );
};

export default Container;
