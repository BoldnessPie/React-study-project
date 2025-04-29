import "./Header.css";

export default function Header({ children }) {
  return (
    <header className="header">
      {children}
      <h1 className="header__title">Reusable component library</h1>
    </header>
  );
}
