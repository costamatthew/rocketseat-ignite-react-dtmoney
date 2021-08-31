import dtLogo from "../../assets/logo.svg";

import { Container, Content } from "./style";

export function Header() {
  return (
    <Container>
      <Content>
      <img src={dtLogo} alt="dt money" />

      <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}