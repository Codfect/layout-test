import { Container } from './styles';
import { Summary } from '../Summary';

export function Dashboard() {
  return(
    <Container>
      <section>
        <h1>Overview of your card</h1>
        <ul>
          <li><a href="/">Day</a></li>
          <li><a href="/">Week</a></li>
          <li><a href="/">Month</a></li>
          <li><a href="/">Year</a></li>
          <div></div>
        </ul>
      </section>
      <Summary></Summary>
    </Container>
  );
}