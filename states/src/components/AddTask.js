import './AddTask.css'

export const AddTask = () => {
    return (
        <div>
            <section className="addtask">
                <form action="">
                    <label htmlFor="task">Add Task</label>
                    <input type="text" name="task" id="task" placeholder="Task Name" />
                    <button type="submit">Add</button>
                </form>
            </section>
        </div>
    )
}
