// Action Types
export const Types = {
  SHOW: 'toast/SHOW',
  HIDE: 'toast/HIDE'
};

// Action Creators
export const showToast = (message, status) => ({ type: Types.SHOW, payload: { message, status } });
export const hideToast = () => ({ type: Types.HIDE, payload: {} });

// Reducer
const INITIAL_STATE = {
  show: false,
  message: '',
  status: 'success'
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return { show: true, message: action.payload.message, status: action.payload.status };

    case Types.HIDE:
      return INITIAL_STATE;

    default:
      return state;
  }
}
