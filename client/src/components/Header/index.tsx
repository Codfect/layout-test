import avatarPng from '../../assets/avatar.png';
import { Container, Content } from './styles';

export function Header() {
  return(
    <Container>
      <Content>
        <div>
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Payments</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Currency</a></li>
          </ul>
        </div>
        <img src={avatarPng} alt="avatar"/>
      </Content>
    </Container>
  );
}