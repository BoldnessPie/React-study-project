import Icon from "../Icon/Icon.jsx";
import "./Accordion.css";

export default function Accordion() {
  return (
    <div className="accordion">
      <details className="accordion__item" open>
        <summary className="accordion__header">
          <span className="accordion__title">Dura lex sed lex</span>
          <Icon name={"arrow"} className={"accordion__icon"} />
        </summary>

        <div className="accordion__content">
          <p className="accordion__text">
            Amet consectetur adipisicing elit. Tenetur maxime voluptatem
            aspernatur, in eius at aperiam doloribus voluptate quis, ex
            necessitatibus vero vitae? Dignissimos totam distinctio itaque modi,
            eius nemo.
          </p>
        </div>
      </details>

      <details className="accordion__item">
        <summary className="accordion__header">
          <span className="accordion__title">Caesar ad Rubiconem</span>
          <Icon name={"arrow"} className={"accordion__icon"} />
        </summary>

        <div className="accordion__content">
          <p className="accordion__text">
            Amet consectetur adipisicing elit. Tenetur maxime voluptatem
            aspernatur, in eius at aperiam doloribus voluptate quis, ex
            necessitatibus vero vitae? Dignissimos totam distinctio itaque modi,
            eius nemo.
          </p>
        </div>
      </details>

      <details className="accordion__item">
        <summary className="accordion__header">
          <span className="accordion__title">Si vis pacem, para bellum</span>
          <Icon name={"arrow"} className={"accordion__icon"} />
        </summary>

        <div className="accordion__content">
          <p className="accordion__text">
            Amet consectetur adipisicing elit. Tenetur maxime voluptatem
            aspernatur, in eius at aperiam doloribus voluptate quis, ex
            necessitatibus vero vitae? Dignissimos totam distinctio itaque modi,
            eius nemo.
          </p>
        </div>
      </details>
    </div>
  );
}
