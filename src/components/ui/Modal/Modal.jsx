import "./Modal.css";
import Icon from "../Icon/Icon.jsx";
import Button from "../Button/Button.jsx";

export default function Modal() {
  return (
    <>
      <Icon name={"menu"} className={"modal__close"} />
      <a href="#modal" className="button button_primary">
        Basic CSS-Only Modal
      </a>
      <div id="modal" className="modal">
        <div className="modal__container">
          <div className="modal__title">
            A CSS-only modal based on the :target pseudo-class. Hope you find it
            helpful.
          </div>
          <label className="modal__label" htmlFor="name">
            <span className="modal__legeng">Name</span>
            <input id="name" className="modal__input" type="text" />
          </label>
          <label htmlFor="email" className="modal__label">
            <span className="modal__legeng">Email</span>
            <input id="email" className="modal__input" type="email" />
          </label>

          <button className="button button_primary">Submit</button>
        </div>
      </div>
    </>
  );
}
