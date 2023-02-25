const changeCondition = (
  targetBoolean: boolean,
  targetId: string | number
) => ({
  type: "todos/changeCondition",
  payload: { completed: targetBoolean, id: targetId },
});

export default changeCondition;
