import React from 'react';
import PropTypes from 'prop-types';
import {
  calendar,
  calendarHeader,
  calendarHeaderTitle,
  leftButton,
  rightButton,
  weekdays,
  days,
  active,
} from './style.css';
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

//As seen on https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
const monthDays = function(date) {
  var d = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return d.getDate();
};

//This was used as a reference for styling and setup: https://www.w3schools.com/howto/howto_css_calendar.asp
class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      selectedDate: new Date(),
    };
  }
  setSelectedClass(year, month, day) {
    if (this.checkDate(year, month, day)) {
      return active;
    } else {
      return '';
    }
  }
  checkDate(year, month, day) {
    const { selectedDate } = this.state;
    var years = selectedDate.getFullYear() === year;
    var months = selectedDate.getMonth() === month;
    var days = selectedDate.getDate() === day;

    return years && months && days;
  }
  selectDate(date) {
    this.setState({ selectedDate: date });
    this.props.onDatePick(date.toLocaleString(this.props.locale));
  }
  render() {
    const { currentDate } = this.state;
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var day = currentDate.getDay();
    var firstDay = new Date(year, month, 0).getDay();
    return (
      <div className={calendar}>
        <div className={calendarHeader}>
          <button
            className={leftButton}
            onClick={() => this.setState({ currentDate: new Date(year - 1, month, day) })}
          >
            &lt;
          </button>
          <p className={calendarHeaderTitle}>{year}</p>
          <button
            className={rightButton}
            onClick={() => this.setState({ currentDate: new Date(year + 1, month, day) })}
          >
            &gt;
          </button>
        </div>
        <div className={calendarHeader}>
          <button
            className={leftButton}
            onClick={() => this.setState({ currentDate: new Date(year, month - 1, day) })}
          >
            &lt;
          </button>
          <p className={calendarHeaderTitle}>{`${MONTH_NAMES[month]}`}</p>
          <button
            className={rightButton}
            onClick={() => this.setState({ currentDate: new Date(year, month + 1, day) })}
          >
            &gt;
          </button>
        </div>
        <ul className={weekdays}>
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>
        <ul className={days}>
          {[...Array(firstDay)].map((o, index) => (
            <li key={index} />
          ))}
          {[...Array(monthDays(currentDate))].map((o, index) => (
            <li
              onClick={() => this.selectDate(new Date(year, month, index + 1))}
              className={this.setSelectedClass(year, month, index + 1)}
              key={index}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
DatePicker.propTypes = {
  onDatePick: PropTypes.func.isRequired,
  locale: PropTypes.string,
};
DatePicker.defaultProps = {
  locale: 'is-IS',
};
export default DatePicker;
