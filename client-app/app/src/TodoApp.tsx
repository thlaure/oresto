import { ChangeEvent, useEffect, useState } from 'react'
import './TodoApp.css'
import ListGroup from './components/ListGroup.tsx';
import Title from './components/Title.tsx';
import Button from './components/Button.tsx';
import Input from './components/Input.tsx';

import ITask from './interfaces/ITasks.tsx';

function TodoApp() {
  const [inputText, setInputText] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  // Connect the Express app to request database
  useEffect(() => {
    fetch('http://localhost:8000/todolist')
      .then(response => response.json())
      .then(data => {
        const tasks: ITask[] = [];
        for (let i = 0; i < data.length; i++) {
          tasks.push(data[i]);
        }
        setTasks(tasks);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }
  
  function addTask(taskLabel: string) {
    const taskExists = tasks.some(item => item.label === taskLabel);
    if (taskLabel && !taskExists) {
      const task: ITask = {
        label: taskLabel,
        is_done: false
      }
      saveTask(task);
      setInputText('');
    }
  }

  function saveTask(task: ITask) {
    fetch('http://localhost:8000/todolist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ label: task.label, is_done: task.is_done })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTasks([...tasks, task]);
      })
      .catch(error => console.error('Error:', error));
  }

  return (
    <>
      <div>
        <Title label="Todo app" />

        <div>
          <Input type="text" onChange={handleChange} value={inputText} />
          <Button onClickButton={addTask} item={inputText} label="Add" />
        </div>

        <div>
          <ListGroup items={tasks} />
        </div>
      </div>
    </>
  )
}

export default TodoApp
