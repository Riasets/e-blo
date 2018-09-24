import * as React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Dispatch} from "redux";

import Log from "./log/log";
import Logo from "./logo/logo";
import NavItem from "./navItem/navItem";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

import './navBar.css';

import {Actions} from "../../store/actions/actions";




class NavBar extends React.Component {

    constructor(props: any){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleLog = this.handleLog.bind(this);
        (console as any).log(this.props);
    }

    public handleClick(path: string){

        // @ts-ignore
        const { history } = this.props;
        history.push(path);
    };

    public handleLog(e: any){
        e.preventDefault();
        // @ts-ignore
        if (this.props.Auth.logged) {
            // @ts-ignore
            const {logout} = this.props;
            logout();
        }
        // @ts-ignore
        const { history } = this.props;
        history.push('/login');
    }

    public render() {
        // @ts-ignore
        const currentLocation = this.props.location.pathname;
        return (
            <div className={'navbar-container'}>
                <Logo />
                <NavItem Icon={EventNoteIcon} currentPath={currentLocation} Name={"Расписание"} path={"/schedule"} Handler={this.handleClick}/>
                <NavItem Icon={AccountCircleIcon}  currentPath={currentLocation} Name={"Друзья"} path={"/friends"} Handler={this.handleClick}/>
                <NavItem Icon={SettingsIcon}  currentPath={currentLocation} Name={"Настройки"} path={"/settings"} Handler={this.handleClick}/>
                <NavItem Icon={SearchIcon}  currentPath={currentLocation} Name={"Поиск"} path={"/search"} Handler={this.handleClick}/>

                <Log Icon={PersonIcon} Handler = {this.handleLog}
                    // @ts-ignore
                     email={this.props.Auth.email}/>
            </div>
        );
    }
}

function matStateToProps(state: any){
    return {Auth : {logged: state.Auth.logged, email: state.Auth.email}}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    logout: () => {
        dispatch(Actions.logout());
    }
});

// @ts-ignore
export default withRouter(connect(matStateToProps, mapDispatchToProps)(NavBar));