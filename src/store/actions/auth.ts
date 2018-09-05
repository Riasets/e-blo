export const AuthActions = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    REGISTER: 'REGISTER',
};

const getAuthActions = () => ({
    login: (user:object) => ({type: AuthActions.LOGIN, headers: user}),
    logout: () => ({type: AuthActions.LOGOUT}),
    register: (user:object) => ({type: AuthActions.REGISTER, payload: user})
});

export default getAuthActions();