import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";


import { GlobalStyle } from "./Components/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
