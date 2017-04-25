import {put, take, call, fork} from 'redux-saga/effects';
import {types} from '../actions/home';
import FakeService from '../utils/FakeService';

function* getHomeInfo(payload = {}) {
  try {
    const result = yield call(new FakeService().post, '/home', {
      auth: true,
      formEncoding: true,
    });
    yield put({
      type: types.GET_HOME_INFO_SUCCESS,
      payload: {
        ...result,
      },
    });
    if (payload.success) {
      yield call(payload.success);
    }
    return result;
  } catch (error) {
    yield put({
      type: types.GET_HOME_INFO_FAIL,
    });
  }
}

export function* watchGetHomeInfo() {
  while (true) {
    const {payload} = yield take(types.GET_HOME_INFO_START);
    yield fork(getHomeInfo, payload);
  }
}
