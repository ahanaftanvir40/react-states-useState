------------------------------------------------------
// State and useState

//useState holds the current value of my state and the targetterd state
//the example is for a simple counter

const [currentStateVarName, setTargetStateVarName] = useState(0) //here initial count val is 0

const [count, setCount] = useState(0) // we can also use arrays, string,obj everything

// setCount((count) => count + 1) we can also pass the currentStateName func


let addnum = () => {
    setCount((count) => count + 1); 0+1
    setCount((count) => count + 1); 1+1  //basically it saves the prev count val
    setCount((count) => count + 1); 2+1 = 3
  }
 
tips : task.map((individual elem here) => {return something})  //we can basically access indivual elem of an array using map
---------------------------------------------------
//if we want to access elem from a array suppose

const [tasks, setTasks] = useState([
	{ id: 1, name: 'Do your homework', completed: true },
	{ id: 2, name: 'Web dev work', completed: false },
	{ id: 3, name: 'Meeting with faculty', completed: false }
	])

we use map func. we can do it like this:

<tag>Task List</tag>
      #<ul>
        {tasks.map((task) => (
          <li>{task.name}</li>
        ))}

      </ul>

// we can also use map like the destructure method
{tasks.map(({id, name , completed}) => (
<li>
<span> {id} - {name} </span>
</li>
))}
--------------------------------------------------

//Each list (li) is unique so we should pass a key. when we use map we can also pass the index map(task , index) =>
// or we can also use unique id as key here for ex: id is unique to every task
-------------------------------------------------------------------
//if we want to pass param into <button onclick =
//we do it like this <button onclick = {() => ourFuncName(param)}
--------------------------------------------------------------------
tips : arr.filter(our condition here. it can be a function or anything) it returns a new arr with the given condition


-----------------------------------
---------------------------------
//conditional templates

//it basically adds a condition if it is true then shows the content if false then hide

for ex

const [show , setShow] = useState(true)

{show && 'the things we want to show or hide}

// '?' this holds boolean value
//tips we use '?' to see if it is true then i am performimg this : or i am perfoming this
// we can also add {conditions '?'} in className
<li key={task.id} className={task.completed ? 'completed' : 'incomplete'}>

here we are compairing classes. we can also compare func, buttons etc
---------------------------------------------------

//we can also pass property (props) to components. it can be a string or many things
<TaskList title='this is a prop' />
then we need to pass 'props' in the component js function
we access it like this <h1>Task List {props.title}</h1>

// we use props and componnennt if we are using a big chunk of code and use it later so we wrap it in a componnent 
	and give it a property

tips: we give props to the new js files component for ex: we created TaskCard.js
	so <taskCard task = {task} taskDel = {taskDel} />

then we go to the js file and access them in the function param ({task , taskDel}) 

tips: we add key to the component so <taskCard key = {task.id} task = {task} taskDel = {taskDel} />

tips: we can also use ternary op in className. like :  <div className={show ? '' : 'hidden'}> //hides something

//we access children in a comp like this 

----------------------------------------------------
 <BoxAlert alert_type='success'>
      	<p className="title">Lorem ipsum dolor sit.</p>
   	<p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, veritatis!</p>
 </BoxAlert>
-----------------------------------------------------

export const BoxAlert = ({ alert_type, children }) => {

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
-------------------------------------------------------
//props drilling is basically drilling through components and use a props in multiple componnents

----------------------------------------------------
//index.css is our global stylesheet
	1.all types of font
	2.all our icons
	3.css var :root{
			--theme-border: my pref color
			}
	
	//we use the var like this: var(--theme-border)

	4.pre settings *{
	5.specific elem suppose button tag , h1 tag

tips : if a className is in div we wrtite .nameofcalss tag {}
	if it is right in the tag we write tag.nameofclass {}
-----------------------------------------------------------------
//we can also apply inline css <h1 style = {{color: 'red', border: '1px solid black'}}> hello </h1>  //we have to create an obj and give key value

//we can also do this:
	const styles = {
        color: 'red',
        border: '1px solid black',
        padding: '20px'
    }
make a obj and pass it
tips: we cant use '-' like border-radius because it is js.
      so we use camelCase like borderRadius

<h1 style={styles}> Test </h1>
---------------------------------------------
//we can also use dynamic css
borderColor: show ? 'green' : 'red'
---------------------
// we use inline css like this 

<h1 style={{color: "red"}}>Hello Style!</h1>

//when we use module our css becomes unique. we name it like TaskCard.module.css
	.title{
	background-color : 'red';
	}

// we import it like : import styles(we can give any name) from 'our path'

// we use it like <span className = {styles.title}> hello </span> 

//we use this to limit the scope. now this title class is unique to TaskCard.js only
// it only works with id and class
-------------
//tips: if something have its own header, title, footer then we use section tag in html

---------------------------------------------------
const{taskValue, setTaskValue] = useState('')

//onChange = {} basically see if there is any change in the field and it takes a func and works according to the defined func

 <input onChange={handleInput} type="text" name="task" id="task" placeholder="Task Name" autoComplete='off' />

// let handleInput = (event) => {
	setTaskValue(event.target.value); //here 'target' basically targets the input field on which we are going to implement the func
					// and 'value' basically gets the value of the input field. basically whatever we write it gets it	
}

//we can also do this
 <input onChange={(e) => setTaskValue(e.target.value)} type="text" name="task" id="task" placeholder="Task Name" autoComplete='off' />

tips : onChange usually used on input field
tips: we use as many states as the input fields. for ex we use a state for email and another for username and so on.
-------------------------------------------------------------
tips: () => handleSome()  we pass something in () when it is not defined earlier and we want to use it in handlesome(here) func

for ex (e) => handleInput(e.target.value)

-------------------------
//submitting form

const handleSubmit = (e) => {
        e.preventDefault()

        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progress)
        }

        console.log(task)

    <div>
            <section className="addtask">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="task">Add Task</label>
                    <input onChange={(e) => setTaskValue(e.target.value)} type="text" value={taskValue} name="task" id="task" placeholder="Task Name" autoComplete='off' />
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

//here we passed <option value= {progress} to reset the option val
//we used onSubmit in the form section to submit the form
----------------------
//full submit func

    const handleSubmit = (e) => {
        e.preventDefault()

        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progress)
        }
        console.log(task)
        setTasks([...tasks , task])
        handleReset()

    }

here we passed setTasks([..tasks , task]) because tasks is an array and inside that there are obj. so we first have to pass an array.

//useRef

//it cant render value. but we can use anywhere to use the value.
//we use it like taskRef = useRef('') any value like useState.

//instead of this



    <input onChange={(e) => setTaskValue(e.target.value)} type="text" value={taskValue} name="task" id="task" placeholder="Task Name" autoComplete='off' />


// we use it like this


    const handleReset = () => {
        //setTaskValue('')
        taskRef.current.value = '';
        setProgress(false)

    }

		
    <input type="text" name="task" id="task" placeholder="Task Name" autoComplete='off' ref={taskRef} />

//tips: to get access to the useRef value and set something we use nameofRefvar.current.value = '' ;
//we also add a ref ={nameofRefvar} in a html tag that we want to use. 
//we dont need to use any useState()

------------------
//tips: we must pass a value in input tag or any tag we want to reset value ={initialStatevarName}
//tips: onChange ={} calls a function everytime we enter a text or delete a text.
-------------------
//tips: 

	<select onChange={(e) => setProgress(e.target.value)} value={progress}>
                        <option value="false">Pending</option>
                        <option value="true">Completed</option>
                    </select>

//here we took the value of the options and passed it to setProgress
-------------------------
