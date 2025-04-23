import "./Skeleton.css";

export default function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton__header">
        <div className="skeleton__avatar"></div>
        <div className="skeleton__title">
          <div className="skeleton__row skeleton_small"></div>
          <div className="skeleton__row skeleton_medium"></div>
        </div>
      </div>

      <div className="skeleton__content">
        <div className="skeleton__row skeleton_full"></div>
        <div className="skeleton__row skeleton_full"></div>
      </div>
    </div>
  );
}
