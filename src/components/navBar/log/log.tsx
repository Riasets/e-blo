import * as React from 'react';

import './log.css';

const Log = (props: any) => {
    const Icon = props.Icon;

    return (
        <div className={'log-container'}>

            <h6>Войти </h6>
            <Icon className={"log-icon"}/>
        </div>
    );
};

export default Log;