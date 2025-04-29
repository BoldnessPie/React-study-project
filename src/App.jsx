import "./assets/styles/index.css";
import Page from "./components/page/Page.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import Input from "./components/ui/Input/Input.jsx";
import Modal from "./components/ui/Modal/Modal.jsx";

function App() {
  return (
    <Page>
      <Header />
      <Main>
        <Modal />
      </Main>
      <Footer />
    </Page>
  );
}

export default App;
