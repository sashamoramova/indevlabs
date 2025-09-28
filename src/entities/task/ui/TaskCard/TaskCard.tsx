import { ITask } from '../../model';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: ITask;
  // onDelete?: (id: number) => void;
  goToTaskPage?: (id: number) => void;
}

export function TaskCard({ task, goToTaskPage }: TaskCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{task.title}</h2>
      <p className={styles.body}>{task.body}</p>
      <div className={styles.footer}>
        <span className={styles.author}>Автор: {task.author.username}</span>
        {/* {onDelete && (
          <button
            className={styles.deleteBtn}
            onClick={() => onDelete(task.id)}
          >
            Удалить
          </button>
        )} */}
        {goToTaskPage && (
          <button
            className={styles.goToTaskPageBtn}
            onClick={() => goToTaskPage?.(task.id)}
          >
            Перейти к задаче
          </button>
        )}
      </div>
    </div>
  );
}
