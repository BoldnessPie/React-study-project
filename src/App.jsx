import "./assets/styles/index.css";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import Nav from "./components/nav/Nav.jsx";
import Card from "./components/card/Card.jsx";

import Tooltip from "./components/ui/Tooltip/Tooltip.jsx";
import ModalPreview from "./components/ui/Modal/ModalPreview.jsx";
import Histogram from "./components/ui/Histogram/Histogram.jsx";
import Avatar from "./components/ui/Avatar/Avatar.jsx";
import Calendar from "./components/ui/Calendar/Calendar.jsx";
import CustomFormElements from "./components/custom/CustomFormElements.jsx";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>

      <Main>
        <Card title={"Tooltip"} description={"Atom"}>
          <Tooltip className={"tooltip__help_preview"} />
        </Card>

        <Card title={"Modal"} description={"Organism"}>
          <ModalPreview />
        </Card>

        <Card title={"Histogram"} description={"Organism"}>
          <Histogram previewMode={true} />
        </Card>

        <Card title={"Avatar"} description={"Atom"}>
          <Avatar
            src={"../src/assets/images/avatar.jpg"}
            alt={"avatar picture"}
          />
        </Card>

        <Card title={"Custom form elements"} description={"Molecule"}>
          <CustomFormElements className={"custom_preview"} />
        </Card>

        <Card title={"Calendar"} description={"Molecule"}>
          <Calendar className={"calendar_preview"} />
        </Card>
      </Main>

      <Footer />
    </>
  );
}

export default App;
