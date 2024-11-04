import useDataStore from "@/store/useDataStore";
import { PatchDataType, TodoDataType } from "@/types/data";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const useTodo = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const { todoList, setTodoList } = useDataStore();
  const getTodolist = async () => {
    try {
      if (url) {
        const res = await axios.get(`${url}/items`);
        setTodoList(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postTodoList = async (newTodo: string) => {
    try {
      const req = {
        name: newTodo,
      };
      const res = await axios.post(`${url}/items`, req);
      setTodoList([res.data, ...todoList]);
    } catch (error) {
      console.log(error);
    }
  };

  const getTodolistItem = async (
    id: string | string[],
    setFunction: Dispatch<SetStateAction<any>>
  ) => {
    try {
      if (url) {
        const res = await axios.get(`${url}/items/${id}`);
        setFunction(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const patchTodoListItem = async (id: number, req: PatchDataType) => {
    try {
      const res = await axios.patch(`${url}/items/${id}`, req);
      setTodoList(
        todoList.map((item: TodoDataType) => (item.id === id ? res.data : item))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodoListItem = async (id: number) => {
    try {
      const res = await axios.delete(`${url}/items/${id}`);
      setTodoList(todoList.filter((item: TodoDataType) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getTodolist,
    postTodoList,
    getTodolistItem,
    patchTodoListItem,
    deleteTodoListItem,
  };
};
