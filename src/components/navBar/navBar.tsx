import * as React from 'react';
import {withRouter} from "react-router";

import Log from "./log/log";
import Logo from "./logo/logo";
import NavItem from "./navItem/navItem";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

import './navBar.css';



class NavBar extends React.Component {

    constructor(props: any){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick(path: string){

        // @ts-ignore
        const { history } = this.props;
        history.push(path);
    };

    public render() {
        return (
            <div className={'navbar-container'}>
                <Logo />
                <NavItem Icon={EventNoteIcon} Name={"Расписание"} path={"/schedule"} Handler={this.handleClick}/>
                <NavItem Icon={AccountCircleIcon} Name={"Друзья"} path={"/friends"} Handler={this.handleClick}/>
                <NavItem Icon={SettingsIcon} Name={"Настройки"} path={"/settings"} Handler={this.handleClick}/>
                <NavItem Icon={SearchIcon} Name={"Поиск"} path={"/search"} Handler={this.handleClick}/>
                <Log Icon={PersonIcon} />
            </div>
        );
    }
}

export default withRouter(NavBar);