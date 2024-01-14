import { useState } from "react"


export const BoxAlert = ({ alert_type, children }) => {
    const [show, setShow] = useState(true)


    return (
        <>
            <div className={show ? '' : 'hidden'}>
                <div className={` box ${alert_type} `}>
                    {children}

                </div>

            </div>
            <button className='trigger' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
        </>
    )
}
