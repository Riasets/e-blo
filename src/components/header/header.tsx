import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    public state = {
        value: 0
    };

    constructor(props: any) {
        super(props);
        this.state = { value: 0};
        this.handleChange = this.handleChange.bind(this);
    }
    public handleChange(event: any, newValue: number) {
       this.setState({value: newValue});
    }
    public render() {


        return (
                <Paper>
                <Tabs
                fullWidth = {true}
                value={this.state.value}
                onChange = {this.handleChange}>
                    // @ts-ignore
                    <Tab icon={<EventNoteIcon/>} component={Link} to='/schedule' label="Расписание"/>
                    // @ts-ignore
                    <Tab icon={<AccountCircleIcon/>} component={Link} to='/friends' label="Друзья"/>
                    // @ts-ignore
                    <Tab icon={<SettingsIcon/>} component={Link} to='/settings' label="Настройки"/>
                    // @ts-ignore
                    <Tab icon={<SearchIcon/>} component={Link} to='/search' label="Поиск"/>
                    // @ts-ignore
                    <Tab icon={<PersonIcon/>} component={Link} to='/login' label="Войти"/>
                </Tabs>
            </Paper>

        );
    };
}

export default Header;