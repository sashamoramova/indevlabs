import styles from './TaskUpdateForm.module.css';
import { useState } from 'react';
import { ITask, ITaskRowData } from '../../model';

type Props = {
  task: ITask;
  onUpdate: (inputs: ITaskRowData) => void;
};

export function TaskUpdateForm({ task, onUpdate }: Props) {
  const [inputs, setInputs] = useState({
    title: task.title,
    body: task.body,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate(inputs);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type='text'
        value={inputs.title}
        onChange={handleChange}
        placeholder='Title'
        name='title'
      />
      <input
        className={styles.input}
        type='text'
        value={inputs.body}
        onChange={handleChange}
        placeholder='Body'
        name='body'
      />
      <button className={styles.button} type='submit'>
        Update
      </button>
    </form>
  );
}
