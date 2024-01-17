import './AddTask.css'
import { useState } from 'react'
//import { useRef } from 'react'
export const AddTask = ({ tasks, setTasks }) => {

    const [taskValue, setTaskValue] = useState('')

    const [progress, setProgress] = useState(false)

    //const taskRef = useRef('')

    const handleReset = () => {
        setTaskValue('')
        //taskRef.current.value = '';
        setProgress(false)

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progress)
        }
        console.log(task)
        setTasks([...tasks, task])
        handleReset()

    }

    return (
        <div>
            <section className="addtask">
                <form onSubmit={handleSubmit} >
                    <label htmlFor="task">Add Task</label>
                    <input onChange={(e) => setTaskValue(e.target.value)} value={taskValue} type="text" name="task" id="task" placeholder="Task Name" autoComplete='off' />
                    {/*<input type="text" name="task" id="task" placeholder="Task Name" autoComplete='off' ref={taskRef} /> */}

                    <select onChange={(e) => setProgress(e.target.value)} value={progress}>
                        <option value="false">Pending</option>
                        <option value="true">Completed</option>
                    </select>
                    <span onClick={handleReset} className='reset'>Reset</span>
                    <button type="submit">Add</button>
                </form>
                <p>{taskValue}</p>
            </section>
        </div>
    )
}
