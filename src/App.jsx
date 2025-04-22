import Page from "./components/page/Page.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import Button from "./components/ui/Button/Button.jsx";
import "./assets/styles/index.css";

function App() {
  return (
    <Page>
      <Header />
      <Main />
      <Button value={"Primary"} className={"button_primary"} />
      <Button value={"Secondary"} className={"button_secondary"} />
      <Button value={"Alternate"} className={"button_alternate"} />
      <Footer />
    </Page>
  );
}

export default App;
