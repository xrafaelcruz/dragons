// Action Types
export const Types = {
  GET_DRAGON_LIST: 'dragon/GET_DRAGON_LIST',
  GET_DRAGON_LIST_RESULT: 'dragon/GET_DRAGON_LIST_RESULT'
};

// Action Creators
export const getDragonList = () => ({ type: Types.GET_DRAGON_LIST, payload: {} });
export const getDragonListResult = list => ({
  type: Types.GET_DRAGON_LIST_RESULT,
  payload: { list }
});

// Reducer
const INITIAL_STATE = {
  loading: false,
  list: null
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_DRAGON_LIST:
      return { ...state, loading: true };

    case Types.GET_DRAGON_LIST_RESULT:
      return {
        ...state,
        loading: false,
        list: action.payload.list
      };

    default:
      return state;
  }
}
