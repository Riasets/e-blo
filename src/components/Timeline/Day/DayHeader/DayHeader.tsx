import * as React from 'react';

import './DayHeader.css';

const DayHeader = (props: any) => {
    return (
        <div className={'day-header-container'}>
            <h2>Понедельник, 2 пивабря</h2>
            <p>3 пары, 8:00 - 13:25</p>
        </div>
    );
};

export default DayHeader;