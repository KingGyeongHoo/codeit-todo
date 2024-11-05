import useDataStore from "@/store/useDataStore";
import { PatchDataType, TodoDataType } from "@/types/data";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

//TodoList를 관리하기 위한 Hook입니다
export const useTodo = () => {
  // 환경변수에 URL 저장
  const url = process.env.NEXT_PUBLIC_API_URL;
  //전역으로 상태 관리 -> 할 일을 서버로부터 받아오면 전역 상태인 todoList에 저장합니다
  const { todoList, setTodoList } = useDataStore();

  //전체 할 일을 받아롭니다
  const getTodolist = async () => {
    try {
      if (url) {
        const res = await axios.get(`${url}/items`);
        setTodoList(res.data);
        return res.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //새로운 할 일을 등록합니다
  //newTodo로 새로운 할 일을 받습니다
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

  //할 일 하나의 정보를 받아옵니다
  const getTodolistItem = async (id: string | string[]) => {
    try {
      if (url) {
        const res = await axios.get(`${url}/items/${id}`);
        return res.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //할 일 정보를 수정합니다
  //id와 req로 수정된 정보를 받습니다
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

  //할 일을 삭제합니다
  const deleteTodoListItem = async (id: number) => {
    try {
      await axios.delete(`${url}/items/${id}`);
      setTodoList(todoList.filter((item: TodoDataType) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  //이미지를 업로드합니디
  //이미지 url을 수정하는 setImageUrl hook을 인자로 받아야 합니다
  const uploadImage = async (
    img: FormData,
    setFunction: Dispatch<SetStateAction<string>>
  ) => {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post(`${url}/images/upload`, img, config);
      setFunction(res.data.url);
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
    uploadImage,
  };
};
