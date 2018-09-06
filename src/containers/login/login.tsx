import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import * as React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Actions} from '../../store/actions/actions';

import './login.css';
import {Dispatch} from "redux";

class Login extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    public handleChange(e:object){
        // @ts-ignore
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    public handleSubmit(e:object){
      // @ts-ignore
        e.preventDefault();
      // @ts-ignore
        const {email, password} = this.state;
      // @ts-ignore
        const { login } = this.props;
      login({email, password});
      this.setState({email: '', password: ''});
    };

    public render() {

        // @ts-ignore
        const {email, password} = this.state;

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
                                        <Input value={email} name={"email"} onChange={this.handleChange} id="email-simple" fullWidth={true}  />
                                    </FormControl>
                                </Grid>
                                <Grid  item={true} className={"login-paper__input-field"} style={{margin: 15}}>
                                    <FormControl fullWidth={true} required={true} >
                                        <InputLabel htmlFor="password-simple">Пароль</InputLabel>
                                        <Input value={password} name={"password"} onChange={this.handleChange} id="password-simple"  />
                                    </FormControl>
                                </Grid>
                                <Grid item={true} style={{margin: 15}}>
                                    <button onClick={this.handleSubmit}>
                                        Войти
                                    </button>
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


const mapDispatchToProps = (dispatch: Dispatch) => ({
    login: (email: string, password: string) => {
        dispatch(Actions.login({email, password}));
    },
});

export default connect(null,mapDispatchToProps)(Login);