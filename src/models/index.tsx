export interface Post {
    id: number;
    title: string;
    isDone: string;
    toggle: string;
  }

export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
  deleteTodos: (id: any) => void;
}