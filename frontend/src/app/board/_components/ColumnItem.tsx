import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Item } from "@/types/board";

export const ColumnItem = ({ items }: { items: Item[] }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose p-2 m-2 bg-white"
          >
            {item.content}
          </ReactMarkdown>
        </div>
      ))}
    </>
  );
};
