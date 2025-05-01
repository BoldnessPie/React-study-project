import "./Card.css";

export default function Card({ link, children, title, description }) {
  return (
    <a href={link} className="card">
      <div className="card__body">{children}</div>
      <div className="card__footer">
        <div className="card__title">{title}</div>
        <div className="card__category">{description}</div>
      </div>
    </a>
  );
}
