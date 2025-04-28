import "./assets/styles/index.css";
import Page from "./components/page/Page.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import Toggler from "./components/ui/Toggler/Toggler.jsx";

function App() {
  return (
    <Page>
      <Header />
      <Main />
      <Toggler legend={"Default"} />
      <Toggler legend={"Active"} defaultChecked={true} />
      <Toggler legend={"Disabled"} disabled={true} />
      <Footer />
    </Page>
  );
}

export default App;
