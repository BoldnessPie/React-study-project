import "./Calendar.css";

export default function Calendar({ className }) {
  return (
    <div className={`calendar ${className}`}>
      <div className="calendar__title">October 2019</div>
      <div className="calendar__wrapper">
        <div className="calendar__inner">
          <div className="calendar__week-day">Mon</div>
          <div className="calendar__week-day">Tue</div>
          <div className="calendar__week-day">Wed</div>
          <div className="calendar__week-day">Thu</div>
          <div className="calendar__week-day">Fri</div>
          <div className="calendar__week-day">Sat</div>
          <div className="calendar__week-day">Sun</div>

          <div className="calendar__day"></div>
          <div className="calendar__day"></div>
          <div className="calendar__day"></div>
          <div className="calendar__day"></div>
          <div className="calendar__day">1</div>
          <div className="calendar__day">2</div>
          <div className="calendar__day">3</div>
          <div className="calendar__day">4</div>
          <div className="calendar__day">5</div>
          <div className="calendar__day">6</div>
          <div className="calendar__day">7</div>
          <div className="calendar__day">8</div>
          <div className="calendar__day">9</div>
          <div className="calendar__day">10</div>
          <div className="calendar__day">11</div>
          <div className="calendar__day">12</div>
          <div className="calendar__day">13</div>
          <div className="calendar__day">14</div>
          <div className="calendar__day">15</div>
          <div className="calendar__day">16</div>
          <div className="calendar__day">17</div>
          <div className="calendar__day calendar__day_active">18</div>
          <div className="calendar__day calendar__day_between">19</div>
          <div className="calendar__day calendar__day_between">20</div>
          <div className="calendar__day calendar__day_between">21</div>
          <div className="calendar__day calendar__day_between">22</div>
          <div className="calendar__day calendar__day_active">23</div>
          <div className="calendar__day">24</div>
          <div className="calendar__day">25</div>
          <div className="calendar__day">26</div>
          <div className="calendar__day">27</div>
          <div className="calendar__day">28</div>
          <div className="calendar__day">29</div>
          <div className="calendar__day">30</div>
          <div className="calendar__day">31</div>
        </div>
      </div>
    </div>
  );
}
