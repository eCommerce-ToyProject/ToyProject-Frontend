export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (userId) => ({
    type: LOGIN_SUCCESS,
    payload: userId,
});

export const logout = () => ({
    type: LOGOUT,
});