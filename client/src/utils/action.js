export const createActionType = types => {
  const actionType = {};
  types.forEach(type => {
    ['START', 'SUCCESS', 'FAIL'].forEach(suffix => {
      actionType[`${type}_${suffix}`] = `${type}_${suffix}`;
    });
  });
  return actionType;
};
