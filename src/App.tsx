import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';


export type FilterValueType = "All" | "Active" | "Completed"

function App() {


    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "CSS", isDone: true},
        {id: 5, title: "JAVA", isDone: false},
    ])
    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(el => el.id !== taskID))
    }

    let [filter, setFilter] = useState<FilterValueType>("All")

    let filterForTodolist = tasks

    if (filter === "Active") {
        filterForTodolist = tasks.filter((el) => el.isDone === false)
    }
    if (filter === "Completed") {
        filterForTodolist = tasks.filter((el) => el.isDone === true)
    }
    const changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist
                title={"What to learn"}
                tasks={filterForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    )
}

export default App;

