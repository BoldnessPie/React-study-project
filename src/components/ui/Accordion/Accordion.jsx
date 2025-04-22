import Arrow from "../Icon/Icon.jsx";
import "./Accordion.css";

export default function Accordion() {
  return (
    <div className="accordion">
      <details className="accordion__item" open>
        <summary className="accordion__header">
          <span className="accordion__title">Dura lex sed lex</span>
          <Arrow name={"arrow"} className={"accordion__icon"} />
        </summary>

        <p className="accordion__content">
          Amet consectetur adipisicing elit. Tenetur maxime voluptatem
          aspernatur.
        </p>
      </details>

      <details className="accordion__item">
        <summary className="accordion__header">
          <span className="accordion__title">Caesar ad Rubiconem</span>
          <Arrow name={"arrow"} className={"accordion__icon"} />
        </summary>

        <p className="accordion__content">
          Amet consectetur adipisicing elit. Tenetur maxime voluptatem
          aspernatur, in eius at aperiam doloribus voluptate quis, ex
          necessitatibus vero vitae?
        </p>
      </details>

      <details className="accordion__item">
        <summary className="accordion__header">
          <span className="accordion__title">Si vis pacem, para bellum</span>
          <Arrow name={"arrow"} className={"accordion__icon"} />
        </summary>

        <p className="accordion__content">
          Amet consectetur adipisicing elit. Tenetur maxime voluptatem
          aspernatur, in eius at aperiam doloribus voluptate quis, ex
          necessitatibus vero vitae? Dignissimos totam distinctio itaque modi,
          eius nemo.
        </p>
      </details>
    </div>
  );
}
