import React from 'react';
import {FilterValueType} from "./App";


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (value: FilterValueType) => void
}

export function Todolist(props: PropsType) {

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((el) => {

                const removeTask = () => props.removeTask(el.id)

                return (
                    <li key={el.id}>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                        <button onClick={removeTask}>х</button>
                    </li>
                )
            })

            }
        </ul>
        <div>
            <button onClick={() => props.changeFilter('All')}>All</button>
            <button onClick={() => props.changeFilter("Active")}>Active</button>
            <button onClick={() => props.changeFilter("Completed")}>Completed</button>
        </div>
    </div>
}
