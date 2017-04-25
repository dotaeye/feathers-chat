import {types} from '../actions/home';

const initialState = {};

export default function home(state = initialState, action = {}) {
  const {payload} = action;

  switch (action.type) {
    case types.GET_HOME_INFO_START:
      return {
        ...state,
        ui: {
          loading: true,
        },
      };
    case types.GET_HOME_INFO_SUCCESS:
      return {
        ...state,
        list: {
          ...payload,
        },
        ui: {
          loading: false,
        },
      };
    case types.GET_HOME_INFO_FAIL:
      return {
        ...state,
        ui: {
          loading: true,
        },
      };
    default:
      return state;
  }
}
