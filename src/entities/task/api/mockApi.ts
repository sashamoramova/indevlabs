// Моковые задачи
export const mockTasks = [
  {
    id: 1,
    title: 'Первая задача',
    body: 'Описание первой задачи',
    author_id: 101,
    createdAt: new Date('2025-09-01T10:00:00Z'),
    updatedAt: new Date('2025-09-02T12:00:00Z'),
    author: {
      id: 101,
      username: 'user1',
      email: 'user1@example.com',
    },
  },
  {
    id: 2,
    title: 'Вторая задача',
    body: 'Описание второй задачи',
    author_id: 102,
    createdAt: new Date('2025-09-03T09:30:00Z'),
    updatedAt: new Date('2025-09-04T14:15:00Z'),
    author: {
      id: 102,
      username: 'user2',
      email: 'user2@example.com',
    },
  },
];

// Моковый API для получения задач
export const fetchTasks = async () => {
  // Эмулируем задержку сети
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockTasks;
};
