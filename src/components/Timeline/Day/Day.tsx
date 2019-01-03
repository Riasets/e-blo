import * as React from 'react';

import DayEvent from './DayEvent/DayEvent';
import DayHeader from './DayHeader/DayHeader';

import './Day.scss';

import { getDate, monthToRussian, weekDayToRussian } from "../../../utils/dateParse";
import {maxTime,
  minTime,
  numberLessons,
  sortEvents,
  timeToString } from "../../../utils/dayInfoParse";
import { randomPhrase } from "../../../utils/randomPhrase";

class Day extends React.Component {
  public state = {
    date: "",
    endTime: "",
    month: "",
    numLessons: 0,
    sortedEvents: [],
    startTime: "",
    weekDay: "",
  };

  constructor(props: any) {
    super(props);
  }

  public componentWillMount() {
    const stateDate = new Date();
        // @ts-ignore
    stateDate.setDate(stateDate.getDate() + this.props.DayNumber);
    this.setState({
      date: getDate(stateDate),
            // @ts-ignore
      endTime: timeToString(maxTime(this.props.Events)),
      month: monthToRussian(stateDate),
            // @ts-ignore
      numLessons: numberLessons(this.props.Events),
            // @ts-ignore
      sortedEvents: sortEvents(this.props.Events),
            // @ts-ignore
      startTime: timeToString(minTime(this.props.Events)),
      weekDay: weekDayToRussian(stateDate),
    });
  }

  public componentWillReceiveProps(nextProps: any) {
    const stateDate = new Date();
        // @ts-ignore
    stateDate.setDate(stateDate.getDate() + nextProps.DayNumber);
    this.setState({
      date: getDate(stateDate),
            // @ts-ignore
      endTime: timeToString(maxTime(nextProps.Events)),
      month: monthToRussian(stateDate),
            // @ts-ignore
      numLessons: numberLessons(nextProps.Events),
            // @ts-ignore
      sortedEvents: sortEvents(nextProps.Events),
            // @ts-ignore
      startTime: timeToString(minTime(nextProps.Events)),
      weekDay: weekDayToRussian(stateDate),
    });
  }

  public render() {
    const { date, endTime, startTime, numLessons, weekDay, month, sortedEvents } = this.state;
    return (
            <div className={'day-container'}>
               <DayHeader
                   Date={date}
                   EndTime={endTime}
                   StartTime={startTime}
                   NumLessons={numLessons}
                   WeekDay={weekDay}
                   Month={month}/>
                { Boolean(sortedEvents.length)  && sortedEvents.map((item, index) =>
                  (<DayEvent Event={item} key={index}/>),
                )
                }
                { !sortedEvents.length &&
                    <h6>{randomPhrase()}</h6>
                }
            </div>
    );
  }
}

export default Day;
