import { ITask } from "../../model";
import styles from "./TaskCard.module.css";

interface TaskCardProps {
  task: ITask;
  goToTaskPage?: (id: number) => void;
}

export function TaskCard({ task, goToTaskPage }: TaskCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{task.title}</h2>
      <p className={styles.body}>{task.body}</p>
      <div className={styles.footer}>
        <span className={styles.author}>Author: {task.author.username}</span>

        {goToTaskPage && (
          <button
            className={styles.goToTaskPageBtn}
            onClick={() => goToTaskPage?.(task.id)}
          >
            Go to task
          </button>
        )}
      </div>
    </div>
  );
}
