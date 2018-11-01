type ILogin = (email: string, password: string) => void;

type Redirect = () => void;

export interface ILoginProps{
  AuthInfo: IAuthInfo;
  login: ILogin;
  redirect: Redirect;
  classes: IStyleClasses;
}

interface IStyleClasses{
  formControl: any;
  labelStyle: any;
  underline: any;
}

interface IAuthInfo{
  error: boolean;
  isLoading: boolean;
  logged: boolean;
}
