export const ColumnItem = () => {
  const itemList = [
    {
      "id": 1,
      "text": "hello",
      "order": 0
    },
    {
      "id": 2,
      "text": "goodbye",
      "order": 1
    }
  ];
  return (
    <>
      <div>Item</div>
      {itemList.map((item) => (
        <div>{item.text}</div>
      ))}
    </>
  );
};