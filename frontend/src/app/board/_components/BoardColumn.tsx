import { ColumnItem } from "./ColumnItem";
export const BoardColumn = ({ title }: { title: string }) => {
  return (
    <>
      <h1>{title}</h1>
      <ColumnItem />
    </>
  );
};