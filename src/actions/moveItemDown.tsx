const moveItemDown = (targetIndex: number) => ({
  type: "todos/moveItemDown",
  payload: targetIndex,
});

export default moveItemDown;
