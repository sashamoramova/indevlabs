import { useEffect, useState } from 'react';
import { fetchTasks } from '@/entities/task/api/mockApi';
import { ITask } from '@/entities/task/model';

export function useTasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchTasks()
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Ошибка загрузки задач');
        setLoading(false);
      });
  }, []);

  return { tasks, loading, error };
}
