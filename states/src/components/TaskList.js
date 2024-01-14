import { useState } from "react"
import { TaskCard } from "./TaskCard"
import { BoxAlert } from "./BoxAlert"

export const TaskList = ({ title, info }) => {

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
            <h1>Task List {title}</h1>
            <ul>
                <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} taskDel={taskDel} info={info} />
                ))}


            </ul>
            <BoxAlert alert_type='success'>
                <p className="title">Lorem ipsum dolor sit.</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, veritatis!</p>
            </BoxAlert>




        </div >
    )
}
