import {types} from '../actions/auth';

const initialState = {};

export default function auth(state = initialState, action = {}) {
  const {payload} = action;

  switch (action.type) {
    case types.SIGN_UP_START:
      return {
        ...state,
        ui: {
          ...state.ui,
          signLoading: true,
        },
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        token: {
          ...payload,
        },
        ui: {
          ...state.ui,
          signLoading: false,
        },
      };
    case types.SIGN_UP_FAIL:
      return {
        ...state,
        ui: {
          ...state.ui,
          signLoading: true,
        },
      };
    default:
      return state;
  }
}
