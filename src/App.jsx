import "./assets/styles/index.css";
import Page from "./components/page/Page.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import Nav from "./components/nav/Nav.jsx";

function App() {
  return (
    <Page>
      <Header>
        <Nav />
      </Header>
      <Main></Main>
      <Footer />
    </Page>
  );
}

export default App;
