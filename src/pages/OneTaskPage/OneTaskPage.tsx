import styles from "./OneTaskPage.module.css";
import { useParams } from "react-router";
import { JSX, useEffect, useState } from "react";
import { ITask, TaskCard } from "@/entities/task";
import { fetchTasks } from "@/entities/task/api/mockApi";

export function OneTaskPage(): JSX.Element {
  const { id } = useParams();
  const [task, setTask] = useState<ITask | null>(null);

  useEffect(() => {
    if (id) {
      fetchTasks().then((tasks) => {
        const found = tasks.find((t) => t.id === Number(id));
        setTask(found || null);
      });
    }
  }, [id]);

  return (
    <div className={styles.container}>
      {task ? <TaskCard task={task} /> : <div>No task found</div>}
    </div>
  );
}
