/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  calendar,
  calendarHeader,
  calendarHeaderTitle,
  btn,
  btnLeft,
  btnRight,
  btnLeftMid,
  btnRightMid,
  lower,
  weekdaysStyle,
  days,
  currentPick,
  today,
} from './style.module.css';

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
      return currentPick;
    }
    if (moment().isSame(new Date(year, month - 1, day), 'date')) {
      return today;
    }
    return '';
  }

  checkDate(year, month, day) {
    const { selectedDate } = this.state;
    const boolYears = selectedDate.format('YYYY') === year;
    const boolMonths = selectedDate.format('M') === month;
    const boolDays = selectedDate.format('D') === day.toString();
    return boolYears && boolMonths && boolDays;
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
      <div className={`${calendar}`}>
        <div className={`${calendarHeader}`}>
          <button
            type="button"
            className={`${btn} ${btnLeft} `}
            onClick={() => this.setState({ currentDate: currentDate.subtract('year', 1) })}
          >
            &#x226A;
          </button>
          <button
            type="button"
            className={`${btn} ${btnLeftMid} ${lower}`}
            onClick={() => this.setState({ currentDate: currentDate.subtract('month', 1) })}
          >
            &lsaquo;
          </button>
          <p className={`${calendarHeaderTitle}`}>{currentDate.format('MMMM YYYY')}</p>
          <button
            type="button"
            className={`${btn} ${btnRightMid} ${lower}`}
            onClick={() => this.setState({ currentDate: currentDate.add('month', 1) })}
          >
            &rsaquo;
          </button>
          <button
            type="button"
            className={`${btn} ${btnRight} `}
            onClick={() => this.setState({ currentDate: currentDate.add('year', 1) })}
          >
            &#x226B;
          </button>
        </div>

        <ul className={`${weekdaysStyle} `}>
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>

        <ul className={`${days} `}>
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
