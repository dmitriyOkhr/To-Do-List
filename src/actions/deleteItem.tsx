const deleteItem = (targetId: string | number) => ({
  type: "todos/deleteItem",
  payload: targetId,
});

export default deleteItem;
