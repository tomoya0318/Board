export type Item = {
  id: number,
  content: string,
  order: number,
}

export type Column = {
  id: number,
  label: string,
  items: Item[]
}

export type Board = {
  id: number,
  columns: Column[],
}