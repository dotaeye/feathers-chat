import {put, take, call, fork} from 'redux-saga/effects';
import {types} from '../actions/auth';
import FeathersService from '../utils/FeathersService';

function* getVerificationCode(payload = {}) {
  try {
    const result = yield call(
      new FeathersService().get,
      'getVerificationCode',
      {
        codeType: payload.codeType,
      },
    );
    yield put({
      type: types.GET_VERIFICATION_CODE_SUCCESS,
      payload: result,
    });
    if (payload.success) {
      yield call(payload.success);
    }
    return result;
  } catch (error) {
    yield put({
      type: types.GET_VERIFICATION_CODE_FAIL,
      error: error,
    });
  }
}

export function* watchGetVerificationCode() {
  while (true) {
    const {payload} = yield take(types.GET_VERIFICATION_CODE_START);
    yield fork(getVerificationCode, payload);
  }
}
