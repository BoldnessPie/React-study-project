import { useLocation } from "react-router";
import HomeFooter from "./HomeFooter";
import DefaultFooter from "./DefaultFooter";

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return <footer>{isHomePage ? <HomeFooter /> : <DefaultFooter />}</footer>;
}
