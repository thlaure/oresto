import { ChangeEvent, useEffect, useState } from 'react'
import './TodoApp.css'
import ListGroup from './components/ListGroup.tsx';
import Title from './components/Title.tsx';
import Button from './components/Button.tsx';
import Input from './components/Input.tsx';

function TodoApp() {
  const [inputText, setInputText] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  // Connect the Express app to request database
  useEffect(() => {
    fetch('http://localhost:8000/todolist')
      .then(response => response.json())
      .then(data => {
        const tasks: string[] = [];
        for (let i = 0; i < data.length; i++) {
          tasks.push(data[i].label);
        }
        setTasks(tasks);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }
  
  function addTask(task: string) {
    if (task !== '' && !tasks.includes(task)) {
      saveTask(task);
      setInputText('');
    }
  }

  function saveTask(task: string) {
    fetch('http://localhost:8000/todolist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ label: task })
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
