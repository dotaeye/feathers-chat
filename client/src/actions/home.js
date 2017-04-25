export const types = {
  GET_HOME_INFO_START: 'GET_HOME_INFO_START',
  GET_HOME_INFO_SUCCESS: 'GET_HOME_INFO_SUCCESS',
  GET_HOME_INFO_FAIL: 'GET_HOME_INFO_FAIL',
};

/**
 * 获取首页信息
 * @param payload
 * @returns {{type: string, payload: *}}
 */
export function getHomeInfo(payload) {
  return {
    type: types.GET_HOME_INFO_START,
    payload,
  };
}
