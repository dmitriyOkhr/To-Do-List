const moveItemUp = (targetIndex: number) => ({
  type: "todos/moveItemUp",
  payload: targetIndex,
});

export default moveItemUp;
