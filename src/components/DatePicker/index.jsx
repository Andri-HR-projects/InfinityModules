/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import moment from 'moment';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      selectedDate: moment(),
    };
  }

  checkIfActiveDay(year, month, day) {
    if (this.checkDate(year, month, day)) {
      return 'currentPick';
    }
    if (moment().isSame(new Date(year, month - 1, day), 'date')) {
      return 'today';
    }
    return '';
  }

  checkDate(year, month, day) {
    const { selectedDate } = this.state;
    const years = selectedDate.format('YYYY') === year;
    const months = selectedDate.format('M') === month;
    const days = selectedDate.format('D') === day.toString();
    return years && months && days;
  }

  selectDate(date) {
    this.setState({ selectedDate: moment(date) });
    const { onDatePick, locale } = this.props;
    onDatePick(date.toLocaleString(locale));
  }

  render() {
    const { currentDate } = this.state;
    const year = currentDate.format('Y');
    const month = currentDate.format('M');
    const firstDay = new Date(year, month - 1, 0).getDay();
    return (
      <div className="calendar">
        <div className="calendar__header">
          <button
            type="button"
            className="btn btn--left"
            onClick={() => this.setState({ currentDate: currentDate.subtract('year', 1) })}
          >
            &#x226A;
          </button>
          <button
            type="button"
            className="btn btn--left--mid lower"
            onClick={() => this.setState({ currentDate: currentDate.subtract('month', 1) })}
          >
            &lsaquo;
          </button>
          <p className="calendar__header--title">{currentDate.format('MMMM YYYY')}</p>
          <button
            type="button"
            className="btn btn--right--mid lower"
            onClick={() => this.setState({ currentDate: currentDate.add('month', 1) })}
          >
            &rsaquo;
          </button>
          <button
            type="button"
            className="btn btn--right"
            onClick={() => this.setState({ currentDate: currentDate.add('year', 1) })}
          >
            &#x226B;
          </button>
        </div>

        <ul className="weekdays">
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>

        <ul className="days">
          {[...Array(firstDay)].map((d, i) => (
            <li key={i} />
          ))}
          {[...Array(currentDate.daysInMonth())].map((d, i) => (
            <li>
              <button
                type="button"
                onClick={() => this.selectDate(new Date(year, month - 1, i + 1))}
                className={this.checkIfActiveDay(year, month, i + 1)}
                key={i}
              >
                {i + 1}
              </button>
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
