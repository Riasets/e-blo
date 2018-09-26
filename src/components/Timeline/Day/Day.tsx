import * as React from 'react';

import DayEvent from './DayEvent/DayEvent';
import DayHeader from './DayHeader/DayHeader';

import './Day.css';

import {getDate, monthToRussian, weekDayToRussian} from "../../../utils/dateParse";
import {maxTime, minTime, numberLessons, sortEvents, timeToString} from "../../../utils/dayInfoParse";

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

    constructor(props: any){
        super(props);
    }

    public componentWillMount() {
        const date = new Date();
        // @ts-ignore
        date.setDate(date.getDate() + this.props.DayNumber);
        this.setState({
            date: getDate(date),
            // @ts-ignore
            endTime: timeToString(maxTime(this.props.Events)),
            month: monthToRussian(date),
            // @ts-ignore
            numLessons: numberLessons(this.props.Events),
            // @ts-ignore
            sortedEvents: sortEvents(this.props.Events),
            // @ts-ignore
            startTime: timeToString(minTime(this.props.Events)),
            weekDay: weekDayToRussian(date),
        })
    }

    public render() {
        const {date, endTime, startTime, numLessons, weekDay, month} = this.state;
        return (
            <div className={'day-container'}>
               <DayHeader
                   Date={date}
                   EndTime={endTime}
                   StartTime={startTime}
                   NumLessons={numLessons}
                   WeekDay={weekDay}
                   Month={month}/>
               <DayEvent />
               <DayEvent />
               <DayEvent />
            </div>
        );
    }
}

export default Day;