import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import * as React from 'react';
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom';
import {Dispatch} from "redux";
import {Actions} from "../../store/actions/actions";

class Header extends React.Component {

    public state = {
        value: 0
    };

    constructor(props: any) {
        super(props);
        this.state = { value: 0 };
        this.handleChange = this.handleChange.bind(this);
        this.Logout = this.Logout.bind(this);
    }
    public handleChange(event: any, newValue: number) {
       this.setState({value: newValue});
    }

    public Logout(e: object){
        // @ts-ignore
        e.preventDefault();
        // @ts-ignore
        if (this.props.logged) {
            // @ts-ignore
            const { logout } = this.props;
            logout();
        }
        // @ts-ignore
        this.props.history.push('/login')
            // TODO
    }

    public render() {
        // @ts-ignore
        const log = this.props.logged? "Выйти" : "Войти";
        return (
                <Paper>
                <Tabs
                fullWidth = {true}
                value={this.state.value}
                onChange = {this.handleChange}>
                    // @ts-ignore
                    <Tab icon={<EventNoteIcon/>} component={NavLink} to='/schedule' label="Расписание"/>
                    // @ts-ignore
                    <Tab icon={<AccountCircleIcon/>} component={NavLink} to='/friends' label="Друзья"/>
                    // @ts-ignore
                    <Tab icon={<SettingsIcon/>} component={NavLink} to='/settings' label="Настройки"/>
                    // @ts-ignore
                    <Tab icon={<SearchIcon/>} component={NavLink} to='/search' label="Поиск"/>
                    // @ts-ignore
                    <Tab icon={<PersonIcon/>} component={NavLink} to='/login' onClick={this.Logout} label={log}/>
                </Tabs>
            </Paper>

        );
    };
}

function mapStateToProps(state: any) {
    return {logged: state.Auth.logged};
}


const  mapDispatchToProps = (dispatch: Dispatch) => ({
    logout: () => {
        dispatch(Actions.logout());
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);