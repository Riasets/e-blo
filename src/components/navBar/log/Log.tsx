import * as React from 'react';

import './log.scss';

const Log = (props: any) => {
  const Icon = props.Icon;
  const email = props.email ? props.email : "";
  const handleClick = (e: any) => props.Handler(e);
  const name = props.email ? "Выйти" : "Войти";
  const nameStyle = props.email ? { margin: "4px 0 12px 0", textAlign: "right" }
  : { margin: "23px 0" };
  const emailStyle = props.email ? { margin: "13px 0 0 0" } : {};
  const iconStyle = props.email ? { top: "-2px" } : { top: "5px" };
  return (
        <div className={'log-container'} onClick={handleClick}>
            <div>
                <p style={emailStyle}>{email}</p>
                <h6
                    // @ts-ignore
                    style={nameStyle}>{name}</h6>
            </div>
            <Icon style={iconStyle} className={"log-icon"}/>
        </div>
  );
};

export default Log;
