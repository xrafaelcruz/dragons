// Action Types
export const Types = {
  GET_DRAGON: 'dragon/GET_DRAGON',
  GET_DRAGON_RESULT: 'dragon/GET_DRAGON_RESULT',

  GET_DRAGON_LIST: 'dragon/GET_DRAGON_LIST',
  GET_DRAGON_LIST_RESULT: 'dragon/GET_DRAGON_LIST_RESULT',

  DELETE_DRAGON: 'dragon/DELETE_DRAGON',
  DELETE_DRAGON_RESULT: 'dragon/DELETE_DRAGON_RESULT',

  UPDATE_DRAGON: 'dragon/UPDATE_DRAGON',
  UPDATE_DRAGON_RESULT: 'dragon/UPDATE_DRAGON_RESULT',

  CREATE_DRAGON: 'dragon/CREATE_DRAGON',
  CREATE_DRAGON_RESULT: 'dragon/CREATE_DRAGON_RESULT'
};

// Action Creators
export const getDragon = id => ({ type: Types.GET_DRAGON, payload: { id } });
export const getDragonResult = dragon => ({
  type: Types.GET_DRAGON_RESULT,
  payload: { dragon }
});

export const getDragonList = () => ({ type: Types.GET_DRAGON_LIST, payload: {} });
export const getDragonListResult = list => ({
  type: Types.GET_DRAGON_LIST_RESULT,
  payload: { list }
});

export const deleteDragon = id => ({ type: Types.DELETE_DRAGON, payload: { id } });
export const deleteDragonResult = list => ({
  type: Types.DELETE_DRAGON_RESULT,
  payload: { list }
});

export const updateDragon = dragon => ({ type: Types.UPDATE_DRAGON, payload: { dragon } });
export const updateDragonResult = () => ({
  type: Types.UPDATE_DRAGON_RESULT,
  payload: {}
});

export const createDragon = dragon => ({ type: Types.CREATE_DRAGON, payload: { dragon } });
export const createDragonResult = () => ({
  type: Types.CREATE_DRAGON_RESULT,
  payload: {}
});

// Reducer
const INITIAL_STATE = {
  loading: false,
  list: null,
  dragon: null
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_DRAGON:
      return { ...state, loading: true };

    case Types.GET_DRAGON_RESULT:
      return {
        ...state,
        loading: false,
        dragon: action.payload.dragon
      };

    case Types.GET_DRAGON_LIST:
      return { ...state, loading: true };

    case Types.GET_DRAGON_LIST_RESULT:
      return {
        ...state,
        loading: false,
        list: action.payload.list
      };

    case Types.DELETE_DRAGON:
      return { ...state, loading: true };

    case Types.DELETE_DRAGON_RESULT:
      return {
        ...state,
        loading: false,
        list: action.payload.list
      };

    case Types.UPDATE_DRAGON:
      return { ...state, loading: true };

    case Types.UPDATE_DRAGON_RESULT:
      return {
        ...state,
        loading: false,
        dragon: null
      };

    case Types.CREATE_DRAGON:
      return { ...state, loading: true };

    case Types.CREATE_DRAGON_RESULT:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
