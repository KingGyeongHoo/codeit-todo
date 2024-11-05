import { ComponentPropsWithoutRef } from "react";
import { TodoDataType } from "./data";

//컴포넌트들의 prop를 전달받을 때 사용하는 타입입니다

type ButtonComponentProps = ComponentPropsWithoutRef<"button">;
type InputComponentProps = ComponentPropsWithoutRef<"input">;
type DivComponentProps = ComponentPropsWithoutRef<"div">;
type TextAreaComponentProps = ComponentPropsWithoutRef<"textarea">;

type ButtonPropsType = {
  className?: string;
  src: StaticImageData;
  children: React.ReactNode;
} & ButtonComponentProps;

type CheckButtonPropstype = {
  isCompleted: boolean;
  className?: string;
} & ButtonComponentProps;

type InputBarPropsType = {
  value?: string;
  className?: string;
} & InputComponentProps;

type ItemListPropsType = {
  info: TodoDataType;
  isInDetail?: boolean;
  className?: string;
} & DivComponentProps;

type TodoListType = {
  className?: string;
  children?: React.ReactNode;
  img: StaticImageData;
  list: TodoDataType[] | undefined;
  type: string;
};

type MemoType = {
  value: string;
} & TextAreaComponentProps;
