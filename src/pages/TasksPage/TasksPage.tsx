// import { TaskForm } from '@/widgets/TaskForm/TaskForm';
import { JSX, lazy, Suspense } from 'react';

const TaskList = lazy(() => import('@/widgets/TaskList/TaskList'));

export function TasksPage(): JSX.Element {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>button</button> */}
      {/* <TaskForm /> */}
      <Suspense fallback={<div>Загрузка....</div>}>
        <TaskList />
      </Suspense>
    </>
  );
}
