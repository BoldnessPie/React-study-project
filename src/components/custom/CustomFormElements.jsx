import Radio from "../ui/Radio/Radio.jsx";
import Checkbox from "../ui/Checkbox/Checkbox.jsx";
import Toggler from "../ui/Toggler/Toggler.jsx";
import "./CustomFormElements.css";
import Input from "../ui/Input/Input.jsx";

export default function CustomFormElements({ className }) {
  return (
    <div className={`custom ${className}`}>
      <div className="custom__wrap">
        <Radio name={"radio"} legend={"Default"} />
        <Radio name={"radio"} legend={"Selected"} defaultChecked={true} />
        <Radio name={"radio"} legend={"Disabled"} disabled={true} />

        <Checkbox legend={"Default"} />
        <Checkbox legend={"Selected"} defaultChecked={true} />
        <Checkbox legend={"Disabled"} disabled={true} />

        <Toggler legend={"Default"} />
        <Toggler legend={"Selected"} defaultChecked={true} />
        <Toggler legend={"Disabled"} disabled={true} />
      </div>
      <div className="custom__input-wrap">
        <Input legend={"Label"} anchor={"label"} placeholder={"Placeholder"} />
        <Input legend={"Success"} anchor={"success"} className={"success"} />
        <Input legend={"Error"} anchor={"error"} className={"error"} />
      </div>
    </div>
  );
}
