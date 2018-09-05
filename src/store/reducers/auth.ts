import ActionType from '../actions/actions';

const initialState = {
    email: null,
    isAdmin: null,
    logged: false,
    name: null,
    schedule: null,
    token: null,
};

// @ts-ignore
const Auth = ( state:object = initialState, action: object) => {
    // @ts-ignore
    switch (action.type) {
        case ActionType.LOGIN: {
            // @ts-ignore
            fetch('https://localhost:8000', {method: 'GET', headers: action.headers})
                .then((res) => {
                        return res.json();
                    }
                )
                .then((res) => {
                    return {
                        ...state,
                        email: res.email,
                        isAdmin: res.isAdmin,
                        logged: true,
                        name: res.name,
                        schedule: res.schedule,
                        token: res.token,
                    }
                })
                .catch((err) => {
                    return state
                });
            break;
        }
        default: {
            return state;
        }
    }
};

export default Auth;