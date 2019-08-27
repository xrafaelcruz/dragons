// Action Types
export const Types = {
  LOGIN: 'login/LOGIN',
  LOGIN_RESULT: 'login/LOGIN_RESULT',
  LOGOUT: 'login/LOGOUT'
};

// Action Creators
export const login = (username, password) => ({ type: Types.LOGIN, payload: { username, password } });
export const loginResult = (user = null) => ({
  type: Types.LOGIN_RESULT,
  payload: { user: user }
});

export const logout = () => ({ type: Types.LOGOUT, payload: {} });

// Reducer
const user = JSON.parse(localStorage.getItem('user'));

const INITIAL_STATE = {
  loading: false,
  user: user,
  isAuthenticated: user ? true : false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, loading: true };

    case Types.LOGIN_RESULT:
      if (action.payload.user) {
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      }

      return {
        ...state,
        loading: false,
        user: action.payload.user,
        isAuthenticated: action.payload.user ? true : false
      };

    case Types.LOGOUT:
      localStorage.removeItem('user');

      return {
        ...state,
        user: null,
        isAuthenticated: false
      };

    default:
      return state;
  }
}
