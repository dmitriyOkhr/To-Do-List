const changeSearchText = (text: string) => ({
  type: "todos/changeSearchText",
  payload: text,
});

export default changeSearchText;
