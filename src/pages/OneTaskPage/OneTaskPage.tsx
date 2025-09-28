import styles from "./OneTaskPage.module.css";
import { useParams } from "react-router";
// import { useNavigate } from "react-router";
import { JSX, useEffect, useState } from "react";
import {
  ITask,
  // ITaskRowData,
  TaskCard,
  // TaskUpdateForm,
} from "@/entities/task";
import { fetchTasks } from "@/entities/task/api/mockApi";
// import { useAlert } from '@/features/alert';
// import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
export function OneTaskPage(): JSX.Element {

// import { useAppSelector } from "@/shared/hooks/reduxHooks";
  const { id } = useParams();
  // const navigate = useNavigate();
  // const { showAlert } = useAlert();
  const [task, setTask] = useState<ITask | null>(null);

  useEffect(() => {
    if (id) {
      fetchTasks().then((tasks) => {
        const found = tasks.find((t) => t.id === Number(id));
        setTask(found || null);
      });
    }
  }, [id]);

  // handleDelete и handleUpdate можно реализовать через моковые данные, если потребуется

  return (
    <div className={styles.container}>
      {task ? (
        <div className={styles.taskContainer}>
          <TaskCard task={task} />
        </div>
      ) : (
        <div>Задача не найдена</div>
      )}
    </div>
  );
}
