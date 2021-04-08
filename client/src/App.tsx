import { AsideMenu } from "./components/AsideMenu";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <AsideMenu></AsideMenu>
      <Header></Header>
      <GlobalStyle />
    </>
  );
}