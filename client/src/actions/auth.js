export const types = {
  SIGN_UP_START: 'SIGN_UP_START',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL: 'SIGN_UP_FAIL',

  SIGN_IN_START: 'SIGN_IN_START',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL: 'SIGN_IN_FAIL',

  GET_VERIFICATION_CODE_START: 'GET_VERIFICATION_CODE_START',
  GET_VERIFICATION_CODE_SUCCESS: 'GET_VERIFICATION_CODE_SUCCESS',
  GET_VERIFICATION_CODE_FAIL: 'GET_VERIFICATION_CODE_FAIL',
};

/**
 * 用户注册
 * @param payload
 * @returns {{type: string, payload: *}}
 */
export function signUp(payload) {
  return {
    type: types.SIGN_UP_START,
    payload,
  };
}

/**
 * 用户登录
 * @param payload
 * @returns {{type: string, payload: *}}
 */
export function signIn(payload) {
  return {
    type: types.SIGN_IN_START,
    payload,
  };
}

/**
 * 获取验证码
 * @param payload
 * @returns {{type: string, payload: *}}
 */
export function getVerificationCode(payload) {
  return {
    type: types.GET_VERIFICATION_CODE_START,
    payload,
  };
}
