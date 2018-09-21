import * as React from 'react';

import Day from "./Day/Day";
import './timeline.css';

class Timeline extends React.Component {
    public render() {
        return (
            <div className={'timeline-container'}>
                <Day />
            </div>
        );
    }
}

export default Timeline;