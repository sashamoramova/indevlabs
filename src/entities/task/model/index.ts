export interface ITaskRowData {
  title: string;
  body: string;
}

export interface ITask extends ITaskRowData {
  id: number;
  author_id: number;
  createdAt: Date;
  updatedAt: Date;
  author: {
    id: number;
    username: string;
    email: string;
  };
}

export type TaskArrayType = ITask[];

export enum TASK_ACTION_TYPE {
  SET_TASKS = 'SET_TASKS',
  ADD_TASK = 'ADD_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  UPDATE_TASK = 'UPDATE_TASK',
}
