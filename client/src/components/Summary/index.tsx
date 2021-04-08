import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Current Balance</p>
        </header>
        <strong>$ 124,720.60</strong>
      </div>

      <div>
        <header>
          <p>Income</p>
        </header>
        <strong>$ 279,433.00</strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
        </header>
        <strong>$ 154,712.40</strong>
      </div>
    </Container>
  );
}