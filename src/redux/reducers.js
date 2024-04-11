import { LOGIN_SUCCESS, LOGOUT } from './login';
import { SEARCH } from './serach';

const initialState = {
    isLoggedIn: false,
    name: undefined,
    searchVal: '',
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
        case SEARCH:
            return{
                ...state,
                searchVal: action.payload,
            }
        default:
            return state;
    }
};

export default reducer;