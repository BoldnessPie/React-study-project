import Container from "../container/Container.jsx";
import "./Header.css";

export default function Header({ children }) {
  return (
    <header className="header">
      <Container>
        {children}
        <h1 className="header__title">Reusable component library</h1>
      </Container>
    </header>
  );
}
