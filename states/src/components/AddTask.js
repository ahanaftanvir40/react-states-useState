import './AddTask.css'
import { useState } from 'react'
export const AddTask = () => {

    const [taskValue, setTaskValue] = useState('')

    const handleReset = () => {
        setTaskValue('')
    }
    return (
        <div>
            <section className="addtask">
                <form action="">
                    <label htmlFor="task">Add Task</label>
                    <input onChange={(e) => setTaskValue(e.target.value)} type="text" value={taskValue} name="task" id="task" placeholder="Task Name" autoComplete='off' />
                    <span onClick={handleReset} className='reset'>Reset</span>
                    <button type="submit">Add</button>
                </form>
                <p>{taskValue}</p>
            </section>
        </div>
    )
}
