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
