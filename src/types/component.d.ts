import { ComponentPropsWithoutRef } from "react";

type ButtonComponentProps = ComponentPropsWithoutRef<"button">;
type InputComponentProps = ComponentPropsWithoutRef<"input">;
type DivComponentProps = ComponentPropsWithoutRef<"div">;

type ButtonPropsType = {
  className?: string;
  src: StaticImageData;
  children: React.ReactNode;
} & ButtonComponentProps;

type InputBarPropsType = {
  className?: string;
} & InputComponentProps;

type ItemListPropsType = {
  className?: string;
  children: React.ReactNode;
  isCompleted: boolean;
} & DivComponentProps;

type TodoListType = {
  className?: string;
  children?: React.ReactNode;
  img: StaticImageData;
};
