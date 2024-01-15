import { useState } from "react"
import { TaskCard } from "./TaskCard"
import { BoxAlert } from "./BoxAlert"
import './TaskList.css';

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

    const styles = {
        color: 'cornflowerblue',
        border: '1px solid black',
        padding: '20px',
        borderRadius: '10px'
    }


    return (
        <section className="tasklist">
            <h1 style={{ color: 'red', border: '1px solid black', padding: '20px' }}>Test {title}</h1>
            <h1 style={styles}>TaskDude</h1>
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




        </section >
    )
}
