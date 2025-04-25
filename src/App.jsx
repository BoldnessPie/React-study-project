import "./assets/styles/index.css";
import Page from "./components/page/Page.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import Checkbox from "./components/ui/Checkbox/Checkbox.jsx";

function App() {
  return (
    <Page>
      <Header />
      <Main />
      <Checkbox legend={"Default"} checked={true} />
      <Checkbox legend={"Default"} />
      <Checkbox legend={"Default"} disabled={true} />
      <Footer />
    </Page>
  );
}

export default App;
