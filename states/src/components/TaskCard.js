

export const TaskCard = ({ task, taskDel, info }) => {
    return (
        <div>
            <li className={task.completed ? 'completed' : 'incomplete'}>
                <span>{task.id} - {task.name} - {info}</span>
                <button onClick={() => taskDel(task.id)} className='delete'>Delete</button>
            </li>
        </div>
    )
}
