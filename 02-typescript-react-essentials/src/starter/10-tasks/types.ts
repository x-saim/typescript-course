export type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

export type FormProps = {
  addTask: (task: Task) => void;
};

export type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
};
