import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { compose, Dispatch } from 'redux';

import { Actions } from '../../store/actions/actions';
import { ILoginProps } from './Login.d';

import './login.css';

const styles = {
  formControl: {
    color: '#212121',
    fontSize: '1.6rem',
    fontWeight: 500,
    height: '2.4rem',
  },
  labelStyle: {
    color: '#616161',
    fontFamily: "'Rubik', sans-serif",
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: 0,
  },
  underline: {
    borderBottom: '.2rem solid #424242',
  },
};

class Login extends React.Component<ILoginProps> {

  public state = {
    email: '',
    password: '',
  };

  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

    // @ts-ignore
  public handleSubmit(e:MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const { email, password } = this.state;
    const { login } = this.props;
    login(email, password);
    this.setState({ email: '', password: '' });
  }

  public componentWillUnmount() {
		// @ts-ignore
    const { redirect } = this.props;
    redirect();
  }

  public render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    const { error } = this.props.AuthInfo;
    if (this.props.AuthInfo.logged) {
      return (<Redirect to="/schedule"/>);
    }
    return (
                <div className={ 'login-container' }>
                    <Paper className={ 'login-paper' }>
                        <h3>Вход</h3>
                        <div className={ 'login-input' }>
                            <FormControl fullWidth={true}>
                                <InputLabel
                                    htmlFor="email-simple"
                                    classes={{ root: classes.labelStyle }}
                                >
                                    Э-мейл
                                </InputLabel>
                                <Input
                                    autoFocus={true}
                                    value={email}
                                    name={ 'email' }
                                    onChange={this.handleChange}
                                    id="email-simple"
                                    fullWidth={true}
                                    classes=
                                      {{root: classes.formControl,
                                        underline: classes.underline}}
                                />
                            </FormControl>
                        </div>
                        <div className={'login-input'}>
                            <FormControl fullWidth={true}>
                                <InputLabel
                                            classes={{ root: classes.labelStyle }}
                                            htmlFor="password-simple">
                                    Пароль
                                </InputLabel>
                                <Input
                                    value={password}
                                    name={'password'}
                                    onChange={this.handleChange}
                                    id="password-simple"
                                    classes=
                                      {{root: classes.formControl,
                                        underline: classes.underline}}
                                />
                            </FormControl>
                        </div>

                        { error &&
                        (
                            <p>{error}</p>
                       )
                        }
                        <a className={'login-button'} onClick={this.handleSubmit}>
                            Войти
                        </a>
                        <Link className={'login-register-link'} to="/register">
                          Зарегистрироваться
                        </Link>
                    </Paper>
                </div>
    );
  }
}

function mapStateToProps(state: any) {
  return { AuthInfo:
  { error : state.Auth.error,
    isLoading: state.Auth.isLoading,
    logged: state.Auth.logged } };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({

  login: (email: string, password: string) => {
    const header = {email,
      password,
    };
        // @ts-ignore
    dispatch(Actions.login(header as Headers));
  },
  redirect: () => {
    dispatch(Actions.redirect());
  },
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
)(Login);
