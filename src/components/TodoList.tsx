import { useEffect, useState } from "react";
import { useStore } from "../store";
import Item from "./Item";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function TodoList() {

  const todosList = useStore((state) => state.todosList);
  useEffect(() => {
    console.log("Updated todosList:", todosList);
  }, [todosList]);
  const { add } = useStore((state) => state.actions);
  const [openAddList, setOpenAddList] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const addItem = () => {
    add({ id: crypto.randomUUID(), title: valueInput });
    setOpenAddList(false);
    setValueInput("");
  };

  // const moveItem = (dragIndex: number, hoverIndex: number) => {
  //   const updatedList = [...todosList];
  //   console.log(todosList)
  //   const [draggedItem] = updatedList.splice(dragIndex, 1);
  //   updatedList.splice(hoverIndex, 0, draggedItem);
  //   console.log(updatedList)
    
  //   dndUpdate(updatedList);
  // };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full h-[10vh]">
        {openAddList ? (
          <div className="flex flex-col h-full bg-white justify-between rounded-md p-1">
            <input
              type="text"
              placeholder="Add"
              className="rounded-md  border"
              onChange={(e) => setValueInput(e.target.value)}
            />
            <div className="flex justify-between">
              <button onClick={() => setOpenAddList(false)}>Cancel</button>
              <button onClick={addItem}>Add</button>
            </div>
          </div>
        ) : (
          <button
            className="bg-blue-800 text-white w-full rounded-md h-full"
            onClick={() => setOpenAddList(true)}
          >
            Add List
          </button>
        )}
        <div>
          {todosList.map((item, index) => {
            return <Item item={item}  index={index} />;
          })}
        </div>
      </div>
    </DndProvider>
  );
}

export default TodoList;
