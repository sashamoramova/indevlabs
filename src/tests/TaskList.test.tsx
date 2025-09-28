// import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useTasks } from '../entities/task/hooks/useTasks';
import '@testing-library/jest-dom';
import TaskList from '@/widgets/TaskList/TaskList';
import { MemoryRouter } from 'react-router-dom';

jest.mock('@/entities/task/hooks/useTasks');

const mockTasks = [
  { id: 1, title: 'Test Task 1', description: 'Desc 1', author: { username: 'user1' }, body: 'Body 1' },
  { id: 2, title: 'Another Task', description: 'Desc 2', author: { username: 'user2' }, body: 'Body 2' },
];

describe('TaskList', () => {
  beforeEach(() => {
    (useTasks as jest.Mock).mockReturnValue({ tasks: mockTasks, loading: false, error: null });
  });

  it('renders all tasks', () => {
    render(
      <MemoryRouter>
        <TaskList />
      </MemoryRouter>
    );
    expect(screen.getByText('Test Task 1')).toBeInTheDocument();
    expect(screen.getByText('Another Task')).toBeInTheDocument();
  });

  it('filters tasks by input', () => {
    render(
      <MemoryRouter>
        <TaskList />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText('Search tasks...');
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(screen.getByText('Test Task 1')).toBeInTheDocument();
    expect(screen.queryByText('Another Task')).not.toBeInTheDocument();
  });

  it('shows loading and error states', () => {
    (useTasks as jest.Mock).mockReturnValueOnce({ tasks: [], loading: true, error: null });
    render(
      <MemoryRouter>
        <TaskList />
      </MemoryRouter>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    (useTasks as jest.Mock).mockReturnValueOnce({ tasks: [], loading: false, error: 'Ошибка' });
    render(
      <MemoryRouter>
        <TaskList />
      </MemoryRouter>
    );
    expect(screen.getByText('Ошибка')).toBeInTheDocument();
  });
});
