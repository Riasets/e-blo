import * as React from 'react';

import DayEvent from './DayEvent/DayEvent';
import DayHeader from './DayHeader/DayHeader';

import './Day.css';

class Day extends React.Component {
    public render() {
        return (
            <div className={'day-container'}>
               <DayHeader />
               <DayEvent />
               <DayEvent />
               <DayEvent />
            </div>
        );
    }
}

export default Day;