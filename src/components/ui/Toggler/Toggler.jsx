import "./Toggler.css";

export default function Toggler({ legend, defaultChecked, disabled }) {
  return (
    <label className="toggler">
      <input
        defaultChecked={defaultChecked}
        disabled={disabled}
        type="checkbox"
        className="toggler__input"
      />
      <div className={`toggler__state ${legend ? "toggler_indent" : ""}`}>
        <div className="toggler__control">
          <div className="toggler__icon"></div>
        </div>
        <div className="toggler_legend">{legend}</div>
      </div>
    </label>
  );
}
