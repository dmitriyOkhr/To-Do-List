interface objItem {
  title: string;
  description: string;
}

const updateItem = (item: objItem, targetId: string | number) => ({
  type: "todos/updateItem",
  payload: { title: item.title, description: item.description, id: targetId },
});

export default updateItem;
