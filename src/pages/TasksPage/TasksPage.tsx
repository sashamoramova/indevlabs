// import { TaskForm } from '@/widgets/TaskForm/TaskForm';
import { JSX, lazy, Suspense } from "react";

const TaskList = lazy(() => import("@/widgets/TaskList/TaskList"));

export function TasksPage(): JSX.Element {
  return (
    <>
      <Suspense fallback={<div>Загрузка....</div>}>
        <TaskList />
      </Suspense>
    </>
  );
}
