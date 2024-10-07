import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ItemList } from '@/types/board';

export const ColumnItem = ({ itemList }: { itemList: ItemList[]}) => {
  return (
    <>
      {itemList.map((item) => (
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose p-2 m-2 bg-white">{item.text}</ReactMarkdown>
      ))}
    </>
  );
};