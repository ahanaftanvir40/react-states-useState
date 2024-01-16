import { useState } from "react";


export const Counter = ({ title }) => {

    const [count, setCount] = useState(0);
    let addnum = () => {
        setCount((count) => count + 1);
        setCount((count) => count + 1)
        setCount((count) => count + 1)
    }
    let subnum = () => {
        setCount(count - 1)
    }
    let reset = () => {
        setCount(0)
    }



    return (
        <div>
            <h1 style={{ color: 'red', border: '1px solid black', padding: '20px' }}>Test {title}</h1>
            <div className="box">
                <p>{count}</p>
            </div>
            <button onClick={() => addnum()} className='add' >Add</button>
            <button onClick={subnum} className='sub'>Sub</button>
            <button onClick={reset} className='sub'>Reset</button>
        </div>
    )
}
