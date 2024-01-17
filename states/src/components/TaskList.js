import { useState } from "react"
import { TaskCard } from "./TaskCard"
import { BoxAlert } from "./BoxAlert"
import './TaskList.css';


export const TaskList = ({ info, tasks, setTasks }) => {




    let taskDel = (taskId) => {
        setTasks(tasks.filter((task) => taskId !== task.id))
    }

    const [show, setShow] = useState(true)

    const styles = {
        color: show ? 'cornflowerblue' : 'blue',
        border: '1px solid',
        borderColor: show ? 'green' : 'red',
        padding: '20px',
        borderRadius: '10px'
    }


    return (
        <section className="tasklist">


            <ul>
                <div className="header">
                    <h1 style={styles}>TaskDude</h1>
                    <button className='trigger' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
                    {show && tasks.map((task) => (
                        <TaskCard key={task.id} task={task} taskDel={taskDel} info={info} />
                    ))}

                </div>
            </ul>
            <BoxAlert alert_type='success'>
                <p className="title">Lorem ipsum dolor sit.</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, veritatis!</p>
            </BoxAlert>




        </section >
    )
}
