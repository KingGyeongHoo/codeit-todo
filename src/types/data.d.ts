//할 일 데이터들의 타입입니다

export type TodoDataType = {
  isCompleted: boolean;
  name: string;
  id: number;
  memo?: string;
  imageUrl?: string;
};

type PatchDataType = {
  isCompleted: boolean;
  name?: string;
  memo?: string;
  imageUrl?: string;
};
