import "./ModalPreview.css";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input";
import Icon from "../Icon/Icon";

export default function ModalPreview() {
  return (
    <div className="modal__container">
      <Icon name={"close"} className={"modal__close-icon"} />
      <p className="modal__title">Modal</p>

      <Input legend={"email"} />
      <div className="modal__inner">
        <Button value={"Submit"} className={"button_primary modal_btn"} />
      </div>
    </div>
  );
}
