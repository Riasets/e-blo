import ActionType from '../actions/actions';

const initialState = {
    email: null,
    error: false,
    isAdmin: null,
    isLoading: false,
    logged: false,
    name: null,
    schedule: null,
    status: null,
    token: null,
};

// @ts-ignore
const Auth = ( state:object = initialState, action) => {
    // @ts-ignore
    switch (action.type) {
        case ActionType.LOGIN_SUCCESS: {
                    return {
                        ...state,
                        email: action.payload.email,
                        error: false,
                        isAdmin: action.payload.isAdmin,
                        isLoading: false,
                        logged: true,
                        name: action.payload.name,
                        schedule: action.payload.schedule,
                        token: action.payload.token,
                    }
        }
        case ActionType.LOGIN_ERROR: {
            return {
                ...initialState,
                error: action.payload,
                logged: false,
            }
        }
        case ActionType.LOGIN_LOAD: {
            return{
                ...initialState,
                error: false,
                isLoading: true,
                logged: false,
            }
        }
        case ActionType.REGISTER_LOAD: {
            return{
                ...state,
                error: false,
                isLoading: true,
                logged: false,
                status: false,
            }
        }
        case ActionType.REGISTER_ERROR: {
            return{
                ...state,
                error: action.payload,
                isLoading: false,
                logged: false,
                status: false,
            }
        }
        case ActionType.REGISTER_SUCCESS: {
            return{
                ...state,
                error: false,
                isLoading: false,
                logged: false,
                status: 'registered'
            }
        }
        case ActionType.LOGOUT: {
            return{
                ...initialState
            }
        }
        default: {
            return state;
        }
    }
};

export default Auth;