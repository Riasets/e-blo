import * as React from 'react';

import './DayHeader.css';

const DayHeader = (props: any) => {
    return (
        <div className={'day-header-container'}>
            <h2>{props.WeekDay}, {props.Date} {props.Month}</h2>
            <p>{props.NumLessons} пары, {props.StartTime} - {props.EndTime}</p>
        </div>
    );
};

export default DayHeader;