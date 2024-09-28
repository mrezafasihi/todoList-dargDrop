import { create } from "zustand";
import { IStoreState, ITodoItem } from "./types";

export const useStore = create<IStoreState>((set) => ({
  todosList: [],
  actions: {
    add: (todoItem: ITodoItem) =>
      set((state) => ({ todosList: [...state.todosList, todoItem] })),
    deleteItem: (id: string) =>
      set((state) => ({
        todosList: state.todosList.filter((item) => item.id != id),
      })),
    editItem: (id: string, updatedTitle: string) =>
      set((state) => ({
        todosList: state.todosList.map((item) =>
          item.id === id ? { ...item, title: updatedTitle } : item
        ),
      })),
      dndUpdate: (dragIndex: number, hoverIndex: number) =>
        set((state) => {
          const updatedItems = [...state.todosList]; // ایجاد کپی از آرایه اصلی
          const [draggedItem] = updatedItems.splice(dragIndex, 1); // حذف آیتم از ایندکس قدیمی
          updatedItems.splice(hoverIndex, 0, draggedItem); // اضافه کردن آیتم به ایندکس جدید
    
          return { todosList: updatedItems }; // بروزرسانی لیست در Zustand
        }),
  },
}));
