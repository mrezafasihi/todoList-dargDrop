import { ITodoItem } from "../store/types";
import { useStore } from "../store";
import { useDrag, useDrop } from "react-dnd";

function Item({ item, index }: { item: ITodoItem; index: number }) {
  const [, drag] = useDrag(() => ({ type: "itemTodo", item: { index } }));
  const [, drop] = useDrop(() => ({
    accept: "itemTodo",
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        dndUpdate(draggedItem.index, index);
        // draggedItem.index = index;
      }
    },
  }));
  const { deleteItem, editItem, dndUpdate } = useStore(
    (state) => state.actions
  );
  return (
    <div className="border bg-slate-400" ref={(node) => drag(drop(node))}>
      <p>{item.title}</p>
      <p onClick={() => deleteItem(item.id)}>delete</p>
      <p onClick={() => editItem(item.id, "hi")}>edit</p>
    </div>
  );
}

export default Item;
