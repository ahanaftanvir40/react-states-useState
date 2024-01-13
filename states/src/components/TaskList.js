import { useState } from "react"

export const TaskList = (props) => {

    const [tasks, setTasks] = useState([
        { id: 1, name: 'Do your homework', completed: true },
        { id: 2, name: 'Web dev work', completed: false },
        { id: 3, name: 'Meeting with faculty', completed: false }
    ])



    let taskDel = (taskId) => {
        setTasks(tasks.filter((task) => taskId !== task.id))
    }

    const [show, setShow] = useState(true)



    return (
        <div>
            <h1>Task List {props.title}</h1>
            <ul>
                <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
                {show && tasks.map((task) => (
                    <li key={task.id} className={task.completed ? 'completed' : 'incomplete'}>
                        <span>{task.id} - {task.name}</span>
                        <button onClick={() => taskDel(task.id)} className='delete'>Delete</button>
                    </li>
                ))}


            </ul>
        </div>
    )
}
