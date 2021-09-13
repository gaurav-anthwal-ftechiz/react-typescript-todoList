import React, { FC } from 'react'
import { ITask } from '../Interfaces'

interface Props {
    task: ITask,
    removeTask(taskNameToDelet: string): void
    // task?: ITask, optional
}

const TodoTask: FC<Props> = ({ task, removeTask }) => {

    
    return (
        <div>
            <div className="task-box">
                <div className="task">
                    <p>{task.taskName}</p>
                    <small>{task.deadline}</small>
                </div>
                <div className='cencel' onClick={()=> removeTask(task.taskName)}>X</div>
            </div>

        </div>
    )
}

export default TodoTask
