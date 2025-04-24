import Page from "./components/page/Page.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import Modal from "./components/ui/Modal/Modal.jsx";
import "./assets/styles/index.css";
import Accordion from "./components/ui/Accordion/Accordion.jsx";

function App() {
  return (
    <Page>
      <Header />
      <Main />
      <Modal />
      <Accordion />
      <Footer />
    </Page>
  );
}

export default App;
