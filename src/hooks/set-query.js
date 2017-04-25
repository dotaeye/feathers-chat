"use strict";

// 设置查询的钩子，钩子会吧有['idField','dataField']的键值对映射到query上
module.exports = fieldsPairs => async hook => {
  const query = {};
  fieldsPairs.forEach(pair => {
    query[pair.idField] = hook.data[pair.dataField];
  });
  hook.params.query = Object.assign({}, hook.params.query, query);
  return hook;
};
