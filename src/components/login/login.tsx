import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import * as React from 'react';
import {Link} from "react-router-dom";

import './login.css';

class Login extends React.Component {

    constructor(props: any) {
        super(props);
    };

    public render() {

        return (
            <Grid container={true} className={"login-form"}  alignItems={"center"} justify={"center"}>
                <Grid item={true} className={"login-paper"} lg={4} >
                    <Paper >
                            <Grid container={true} direction={"column"} justify={"center"} alignItems={"center"}>
                                <Grid item={true}  style={{margin: 15}}>
                                    <h3>Вход</h3>
                                </Grid>
                                <Grid  item={true} className={"login-paper__input-field"} style={{margin: 15}}>
                                    <FormControl fullWidth={true} required={true} >
                                        <InputLabel htmlFor="email-simple" >Э-мейл</InputLabel>
                                        <Input id="email-simple" fullWidth={true}  />
                                    </FormControl>
                                </Grid>
                                <Grid  item={true} className={"login-paper__input-field"} style={{margin: 15}}>
                                    <FormControl fullWidth={true} required={true} >
                                        <InputLabel htmlFor="password-simple">Пароль</InputLabel>
                                        <Input id="password-simple"  />
                                    </FormControl>
                                </Grid>
                                <Grid item={true} style={{margin: 15}}>
                                    <Button  variant="outlined" size="large" color="primary">
                                        Войти
                                    </Button>
                                </Grid>
                                <Grid item={true} style={{margin: 15}}>
                                    <Link to='/register'>Зарегистрироваться</Link>
                                </Grid>
                            </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Login;