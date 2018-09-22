import * as React from 'react';

import Day from "./Day/Day";
import './timeline.css';

class Timeline extends React.Component {
    public render() {
        return (
            <div className={'timeline-container'}>
                <h2>Таймлайн</h2>
                <Day />
                <Day />
                <Day />
            </div>
        );
    }
}

export default Timeline;