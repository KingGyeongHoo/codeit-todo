import todo_img from "@assets/images/todo.png";
import done_img from "@assets/images/done.png";
import { TodoListType } from "@/types/component";
import Image from "next/image";
import ItemList from "@/components/ItemList";

export default function TodoLists() {
  return (
    <div className="flex lg:flex-row flex-col gap-6 w-full h-fit md:py-6">
      <List img={todo_img}></List>
      <List img={done_img}></List>
    </div>
  );
}

const List = ({ img }: TodoListType) => {
  return (
    <div className="lg:w-1/2 flex flex-col gap-4 w-full h-fit">
      <Image src={img} alt="img" width={101} height={36} />
      <ItemList isCompleted={false}>DSAD </ItemList>
      <ItemList isCompleted={true}>DSAD </ItemList>
    </div>
  );
};
