import Icon from "../Icon/Icon.jsx";
import "./Tooltip.css";

export default function Tooltip() {
  return (
    <div className="tooltip">
      <Icon name={"question"} className={"tooltip__icon"} />
      <div className="tooltip__help">Helper Text</div>
    </div>
  );
}
