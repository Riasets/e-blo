import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import * as React from 'react';
import {Link, Redirect} from "react-router-dom";

import {ChangeEvent} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Actions} from "../../store/actions/actions";
import "./register.css";

import {encodeBody} from "../../utils/encode";

class Register extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordRepeat: '',
        };
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    public handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        // @ts-ignore
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    // @ts-ignore
    public handleSubmit(e: MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        // @ts-ignore
        const {email, password} = this.state;
        // @ts-ignore
        const { register } = this.props;
        register(email, password);
        this.setState({email: '', password: '', passwordRepeat: ''});
    }

    public componentWillUnmount(){
        // @ts-ignore
        const {redirect} = this.props;
        redirect();
    }

    public render() {

        // @ts-ignore
        const {email, password, passwordRepeat} = this.state;
        // @ts-ignore
        const {error} = this.props.RegisterInfo;
        // @ts-ignore
        if (this.props.RegisterInfo.status === "registered") {
            return (<Redirect to="/login"/>)
        } else {
            return (
                <Grid container={true} className={"register-form"} alignItems={"center"} justify={"center"}>
                    <Grid item={true} className={"register-paper"} lg={4}>
                        <Paper>
                            <Grid container={true} direction={"column"} justify={"center"} alignItems={"center"}>
                                <Grid item={true} style={{margin: 15}}>
                                    <h3>Регистрация</h3>
                                </Grid>
                                <Grid item={true} className={"register-paper__input-field"} style={{margin: 15}}>
                                    <FormControl fullWidth={true} required={true}>
                                        <InputLabel htmlFor="email-simple">Э-мейл</InputLabel>
                                        <Input value={email} name={"email"} onChange={this.handleChange} id="email-simple" fullWidth={true}/>
                                    </FormControl>
                                </Grid>
                                <Grid item={true} className={"register-paper__input-field"} style={{margin: 15}}>
                                    <FormControl fullWidth={true} required={true}>
                                        <InputLabel htmlFor="password-simple">Пароль</InputLabel>
                                        <Input value={password} name={"password"} onChange={this.handleChange} id="password-simple"/>
                                    </FormControl>
                                </Grid>
                                <Grid item={true} className={"register-paper__input-field"} style={{margin: 15}}>
                                    <FormControl fullWidth={true} required={true}>
                                        <InputLabel htmlFor="password-repeat-simple">Повторите пароль</InputLabel>
                                        <Input value={passwordRepeat} name={"passwordRepeat"} onChange={this.handleChange} id="password-repeat-simple"/>
                                    </FormControl>
                                </Grid>
                                { error &&
                                (<Grid item={true} style={{margin: 5}}>
                                        <p>{error}</p>
                                    </Grid>)
                                }
                                <Grid item={true} style={{margin: 15}}>
                                    <button onClick={this.handleSubmit}>
                                        Зарегистрироваться
                                    </button>
                                </Grid>
                                <Grid item={true} style={{margin: 15}}>
                                    <Link to='/login'>Вход</Link>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            );
        }
    }
}

function mapStateToProps(state: any) {
    return {RegisterInfo : {error : state.Auth.error,  isLoading: state.Auth.isLoading, status: state.Auth.status}}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    redirect: () => {
        dispatch(Actions.redirect());
    },
    register: (email: string, password: string) => {
        const body = {
            'email': email,
            'password': password
        };
        dispatch(Actions.register(encodeBody(body)));
    },
});

export default connect(mapStateToProps,mapDispatchToProps)(Register);