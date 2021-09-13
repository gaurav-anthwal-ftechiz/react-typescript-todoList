import './App.css';
import React, { FC, ChangeEvent, useState } from 'react';
import { ITask } from './Interfaces';
import TodoTask from './components/TodoTask';

const App: FC = () => {

  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todos, setTodos] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else if (event.target.name === 'deadline') {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline }
    setTodos([...todos, newTask])
    setTask('')
    setDeadline(0)
  }

  const removeTask = (taskNameToDelet: string): void =>{
    setTodos(todos.filter((task)=> {
      return(
        task.taskName !== taskNameToDelet
      )
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input type="text" name='task' value={task} placeholder='Task...' onChange={handleChange} />
          <input type="number" name='deadline' value={deadline} placeholder='Deadline (in Days)...' onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="todo-list">
        {todos.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} removeTask={removeTask}/>
        })
        }
      </div>
    </div>
  );
}

export default App;
