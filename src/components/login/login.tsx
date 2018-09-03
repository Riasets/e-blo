import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import * as React from 'react';
import {Link} from "react-router-dom";

class Login extends React.Component {

    constructor(props: any) {
        super(props);
    };

    public render() {

        return (
            <Paper >
                <h3>Login</h3>
                <FormControl >
                    <InputLabel htmlFor="email-simple">Э-мейл</InputLabel>
                    <Input id="email-simple"  />
                </FormControl>
                <FormControl >
                    <InputLabel htmlFor="password-simple">Пароль</InputLabel>
                    <Input id="password-simple"  />
                </FormControl>
                <Button variant="outlined" size="large" color="primary">
                    Войти
                </Button>
                <Link to='/register'>Зарегистрироваться</Link>
            </Paper>
        );
    }
}

export default Login;