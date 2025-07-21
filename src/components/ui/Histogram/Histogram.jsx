import "./Histogram.css";

export default function Historgam({ previewMode = false }) {
  return (
    <div className="histogram">
      <div className="histogram__header">
        <div className="histogram__wrapper">
          <div className="histogram__title">Total orders</div>
          <div className="histogram__count">50254</div>
        </div>

        {!previewMode && (
          <a href="#" className={`histogram__link`}>
            View all
          </a>
        )}
      </div>

      <div className="histogram__bars">
        <div className="histogram__bar histogram_small"></div>
        <div className="histogram__bar histogram_large"></div>
        <div className="histogram__bar histogram_medium"></div>
        <div className="histogram__bar histogram_full"></div>
        <div className="histogram__bar histogram_small"></div>
        <div className="histogram__bar histogram_large"></div>
        <div className="histogram__bar histogram_medium"></div>
        <div className="histogram__bar histogram_large"></div>
        <div className="histogram__bar histogram_medium"></div>
        <div className="histogram__bar histogram_small"></div>
        <div className="histogram__bar histogram_large"></div>
        <div className="histogram__bar histogram_small"></div>
        <div className="histogram__bar histogram_medium"></div>
        <div className="histogram__bar histogram_small"></div>
        <div className="histogram__bar histogram_medium"></div>
        <div className="histogram__bar histogram_large"></div>
        <div className="histogram__bar histogram_medium"></div>
        <div className="histogram__bar histogram_medium"></div>
        <div className="histogram__bar histogram_full"></div>
        <div className="histogram__bar histogram_small"></div>
        <div className="histogram__bar histogram_medium"></div>
        <div className="histogram__bar histogram_small"></div>
        <div className="histogram__bar histogram_large"></div>
        <div className="histogram__bar histogram_medium"></div>
        <div className="histogram__bar histogram_full"></div>
        <div className="histogram__bar histogram_small"></div>
        <div className="histogram__bar histogram_medium"></div>
        <div className="histogram__bar histogram_medium"></div>
        <div className="histogram__bar histogram_large"></div>
        <div className="histogram__bar histogram_small"></div>
      </div>
    </div>
  );
}
