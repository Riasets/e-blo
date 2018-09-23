import * as React from 'react';

import './navItem.css';

const NavItem = (props: any) => {
    const handleClick = () => {
        const handler = props.Handler;
        handler(props.path);
    };

    const Icon = props.Icon;

    return (
        <div className={'navitem-container'} onClick={handleClick}>
            <div className={'navitem-info-container'}>
                <Icon className={"navitem-icon"}/>
                <h6>{props.Name}</h6>
            </div>
        </div>
    );
};

export default NavItem;