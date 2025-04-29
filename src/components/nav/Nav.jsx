import "./Nav.css";
import Icon from "../ui/Icon/Icon.jsx";
import Toggler from "../ui/Toggler/Toggler.jsx";

export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav__home" href="index.html">
        <Icon name={"logo"} className={"nav__logo-icon"} />
      </a>

      <div className="nav__theme-toggler">
        <Icon name={"light"} className={"nav__theme-icon"} />
        <Toggler />
        <Icon name={"dark"} className={"nav__theme-icon"} />
      </div>
    </nav>
  );
}
