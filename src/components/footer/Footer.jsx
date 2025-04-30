import { useLocation } from "react-router";
import Container from "../container/Container.jsx";
import HomeFooter from "./HomeFooter";
import DefaultFooter from "./DefaultFooter";
import "./Footer.css";

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <footer className="footer">
      <Container>{isHomePage ? <HomeFooter /> : <DefaultFooter />}</Container>
    </footer>
  );
}
