import "./Avatar.css";

export default function Avatar({ src, alt }) {
  return (
    <div className="avatar avatar_preview">
      <img className="avatar__picture" src={src} alt={alt} />
    </div>
  );
}
