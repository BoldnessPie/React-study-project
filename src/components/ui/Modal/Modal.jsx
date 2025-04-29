import "./Modal.css";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input";
import Icon from "../Icon/Icon";
export default function Modal() {
  return (
    <>
      <a href="#modal">
        <Button value={"Open Modal"} className={"button_primary"} />
      </a>
      <div className="modal" id="modal">
        <div className="modal__container">
          <a href="#" className="modal__close">
            <Icon name={"close"} className={"modal__close-icon"} />
          </a>
          <p className="modal__title">
            A CSS-only modal based on the :target pseudo-class. Hope you find it
            helpful.
          </p>

          <Input legend={"name"} />
          <Input legend={"email"} />
          <div className="modal__inner">
            <Button value={"Submit"} className={"button_primary modal_btn"} />
          </div>
        </div>
      </div>
    </>
  );
}
