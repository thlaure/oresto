import { ChangeEvent, useState } from 'react'
import './TodoApp.css'
import ListGroup from './components/ListGroup.tsx';
import Title from './components/Title.tsx';
import Button from './components/Button.tsx';
import Input from './components/Input.tsx';

function TodoApp() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }
  
  function addTask(task: string) {
    if (task !== '' && !tasks.includes(task)) {
      setTasks([...tasks, task]);
      setInputText('');
    }
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
