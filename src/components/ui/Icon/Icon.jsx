export default function Arrow({ name, className }) {
  return (
    <svg className={className}>
      <use href={`./src/assets/images/sprites/icons.svg#icon-${name}`}></use>
    </svg>
  );
}
