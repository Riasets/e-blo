import {FormHelperText} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
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
            noEqualPassword: false,
            password: '',
            passwordRepeat: '',
            shortEmail: false,
            shortPassword: false,
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
        const {email, password, passwordRepeat} = this.state;
        const noEqualPassword = password !== passwordRepeat;
        const shortPassword = (password.length < 5);
        const shortEmail = email.length < 5;
        if (!noEqualPassword && !shortPassword) {
            // @ts-ignore
            const {register} = this.props;
            register(email, password);
            this.setState({email: '', password: '', passwordRepeat: ''});
        } else {
            this.setState({noEqualPassword, shortPassword, shortEmail});
        }
    }

    public componentWillUnmount(){
        // @ts-ignore
        const {redirect} = this.props;
        redirect();
    }

    public render() {

        // @ts-ignore
        const {noEqualPassword,email, password, passwordRepeat, shortPassword, shortEmail} = this.state;
        // @ts-ignore
        const {error} = this.props.RegisterInfo;
        // @ts-ignore
        if (this.props.RegisterInfo.status === "registered") {
            return (<Redirect to="/login"/>)
        } else {
            return (
                <div className={"register-container"}>
                        <Paper className={'register-paper'}>
                            <h3>Регистрация</h3>
                            <div className="register-input">
                                <FormControl fullWidth={true} required={true}>
                                    <InputLabel htmlFor="email-simple">Э-мейл</InputLabel>
                                    <Input autoFocus={true} error={shortEmail} value={email} name={"email"} onChange={this.handleChange} id="email-simple" fullWidth={true}/>
                                    { shortEmail&&
                                    <FormHelperText id="component-error-text">Наверное это не э-мейл...</FormHelperText>
                                    }
                                </FormControl>
                            </div>
                            <div className="register-input">
                                <FormControl fullWidth={true} required={true}>
                                    <InputLabel htmlFor="password-simple">Пароль</InputLabel>
                                    <Input type="password" error={shortPassword} value={password} name={"password"} onChange={this.handleChange} id="password-simple"/>
                                    { shortPassword &&
                                    <FormHelperText id="component-error-text">Пароль слишком короткий</FormHelperText>
                                    }
                                </FormControl>
                            </div>
                            <div className="register-input">
                                <FormControl fullWidth={true} required={true}>
                                    <InputLabel htmlFor="password-repeat-simple">Повторите пароль</InputLabel>
                                    <Input type="password" error={noEqualPassword} value={passwordRepeat} name={"passwordRepeat"} onChange={this.handleChange} id="password-repeat-simple"/>
                                    { noEqualPassword &&
                                        <FormHelperText id="component-error-text">Пароли не совпадают</FormHelperText>
                                    }
                                </FormControl>
                            </div>

                                { error &&
                                (
                                    <p>{error}</p>
                                )
                                }
                                <a className={"register-button"} onClick={this.handleSubmit}>
                                    Зарегистрироваться
                                </a>

                            <Link className={"register-login-link"} to='/login'>У меня уже есть аккаунт</Link>
                        </Paper>
                </div>
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