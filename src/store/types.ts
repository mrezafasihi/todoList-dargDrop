export interface ITodoItem {
  id: string;
  title: string;
}
export interface IStoreState {
  todosList: ITodoItem[] | [];
  actions: {
    add: (todoItem: ITodoItem) => void;
    deleteItem: (id: string) => void;
    editItem: (id: string, updateValue: string) => void;
    dndUpdate:(dragIndex: number, hoverIndex: number)=>void
  };
}
