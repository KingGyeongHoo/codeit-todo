import { ComponentPropsWithoutRef } from "react";
import { TodoDataType } from "./data";

type ButtonComponentProps = ComponentPropsWithoutRef<"button">;
type InputComponentProps = ComponentPropsWithoutRef<"input">;
type DivComponentProps = ComponentPropsWithoutRef<"div">;

type ButtonPropsType = {
  className?: string;
  src: StaticImageData;
  children: React.ReactNode;
} & ButtonComponentProps;

type InputBarPropsType = {
  value?: string;
  className?: string;
} & InputComponentProps;

type ItemListPropsType = {
  info: TodoDataType;
  className?: string;
} & DivComponentProps;

type TodoListType = {
  className?: string;
  children?: React.ReactNode;
  img: StaticImageData;
  list: TodoDataType[] | undefined;
  type: string;
};
