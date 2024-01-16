import './TaskCard.css';
import styles from './TaskCard.module.css'

export const TaskCard = ({ task, taskDel, info }) => {
    return (
        <div>
            <li className={`taskcard ${task.completed ? 'completed' : 'incomplete'}`}>
                <span className={styles.title}>{task.id} - {task.name} - {info}</span>
                <button onClick={() => taskDel(task.id)} className='delete'>Delete</button>
            </li>
        </div >
    )
}
