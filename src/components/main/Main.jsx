import Container from "../container/Container.jsx";
import "./Main.css";

export default function Main({ children }) {
  return (
    <main className="main">
      <Container>
        <div className="main__container">{children}</div>
      </Container>
    </main>
  );
}
