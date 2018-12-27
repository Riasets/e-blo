import * as React from 'react';

import { numLessonToString, timeToString } from "../../../../utils/dayInfoParse";
import './DayEvent.scss';

const DayEvent = (props: any) => {

  return (
        <div className={'day-event-container'}>
            <h2>{props.Event.name}</h2>
            <p>{numLessonToString(props.Event.numberOfLesson)}
            {props.Event.isLesson ? "," : ""}
            {timeToString(props.Event.start)} - {timeToString(props.Event.end)}</p>
        </div>
  );
};

export default DayEvent;
