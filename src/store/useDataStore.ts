import { TodoDataType } from "@/types/data";
import { create } from "zustand";

//할 일 목록을 전역으로 관리하기 위한 Zustand Store입니다

// 상태 타입 정의
interface TodoDataState {
  todoList: TodoDataType[];
  setTodoList: (data: TodoDataType[]) => void;
}

// Zustand 스토어 생성
const useDataStore = create<TodoDataState>((set) => ({
  todoList: [],
  setTodoList: (data) => set(() => ({ todoList: data })),
}));

export default useDataStore;
