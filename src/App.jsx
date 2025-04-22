import Page from "./components/page/Page.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import Accordion from "./components/ui/Accordion/Accordion.jsx";
import "./assets/styles/index.css";

function App() {
  return (
    <Page>
      <Header />
      <Main />
      <Accordion />
      <Footer />
    </Page>
  );
}

export default App;
