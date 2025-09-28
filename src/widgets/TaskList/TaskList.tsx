import styles from "./TaskList.module.css";
import React from "react";
import { TaskCard } from "@/entities/task";
import { useNavigate } from "react-router";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import { useTasks } from "@/entities/task/hooks/useTasks";

export default function TaskList() {
  const { tasks, loading, error } = useTasks();
  const navigate = useNavigate();
  const [filter, setFilter] = React.useState("");

  const handleGoToTask = (id: number) => {
    navigate(`${CLIENT_ROUTES.TASKS}/${id}`);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.container}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search tasks..."
        aria-label="Search tasks by title"
        className={styles.searchInput}
      />
      {filteredTasks.length === 0 ? (
        <div className={styles.noTasks}>No tasks found</div>
      ) : (
        <div className={styles.tasksGrid}>
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} goToTaskPage={handleGoToTask} />
          ))}
        </div>
      )}
    </div>
  );
}
