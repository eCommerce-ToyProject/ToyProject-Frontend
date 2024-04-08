import { LOGIN_SUCCESS, LOGOUT } from './login';

const initialState = {
    isLoggedIn: false,
    name: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                name: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                name: undefined,
            };
        default:
            return state;
    }
};

export default reducer;