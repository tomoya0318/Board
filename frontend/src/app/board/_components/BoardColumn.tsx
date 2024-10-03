import { ColumnItem } from "./ColumnItem";

const itemList = [
  {
    id: 1,
    text: `## GFM\n## Autolink literals\nwww.example.com, https://example.com, and contact@example.com.`,
    order: 0
  },
  {
    id: 2,
    text: `## goodbye`,
    order: 1
  }
];

export const BoardColumn = ({ titleList }: { titleList: string[] }) => {
  return (
    <div className="flex p-2">
      {titleList.map(title => (
        <div className="flex-none w-80 h-dvh mr-2 bg-slate-100">
          <div className="text-2xl p-1 bg-red-100">{title}</div>
          <ColumnItem itemList={itemList}/>
        </div>
      ))}
    </div>
  );
};