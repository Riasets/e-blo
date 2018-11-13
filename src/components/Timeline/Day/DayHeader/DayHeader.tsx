import * as React from 'react';

import './DayHeader.scss';

const DayHeader = (props: any) => {
  const exep = [2, 3, 4];
  const Lessons = props.NumLessons ? +(props.NumLessons in exep ?
    props.NumLessons + " пары," : (props.NumLessons === 1 ? props.NumLessons + " пара," :
    props.NumLessons + " пар,")) : "";
  const time = (props.StartTime === "24:00") ? "Время не задано" : props.StartTime +
    "-" + props.EndTime;
  return (
        <div className={'day-header-container'}>
            <h2>{props.WeekDay}, {props.Date} {props.Month}</h2>
            <p>{Lessons} {time}</p>
        </div>
  );
};

export default DayHeader;
