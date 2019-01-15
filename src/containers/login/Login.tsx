import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

import { Actions } from '../../store/actions/actions';
import { ILoginProps } from './Login.d';

import './login.scss';

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
    return (
                <div className={ 'login-container' }>
                    <Paper className={ 'paper' }>
                      <form className={ 'login-paper' }>
                        <h3>Вход</h3>
                        <div className={ 'login-input' }>
                            <FormControl fullWidth={true}>
                                <InputLabel
                                    htmlFor="email-simple"
                                    classes={{ root: classes.labelStyle,
                                      shrink: classes.shrink}}
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
                                        underline: classes.underline,
                                      }}
                                />
                            </FormControl>
                        </div>
                        <div className={'login-input'}>
                            <FormControl fullWidth={true}>
                                <InputLabel
                                            classes={{ root: classes.labelStyle,
                                              shrink: classes.shrink}}
                                            htmlFor="password-simple">
                                    Пароль
                                </InputLabel>
                                <Input
                                    type="password"
                                    value={password}
                                    name={'password'}
                                    onChange={this.handleChange}
                                    id="password-simple"
                                    classes=
                                      {{root: classes.formControl,
                                        underline: classes.underline,
                                        inputType: classes.inputType,
                                      }}
                                />
                            </FormControl>
                        </div>

                        { error &&
                        (
                            <p>{error}</p>
                       )
                        }
                        <button className={'login-button'} onClick={this.handleSubmit}>
                            Войти
                        </button>
                        <Link className={'login-register-link'} to="/register">
                          Зарегистрироваться
                        </Link>
                      </form>
                    </Paper>
                </div>
    );
  }
}

function mapStateToProps(state: any) {
  return { AuthInfo:
  { error : state.Auth.error,
    isLoading: state.Auth.isLoading,
  } };
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
