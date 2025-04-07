import { useState } from "react";
export default function NewTask({setTasks}){
    const [task, setTask] = useState('');


function addTask() {

if(task.trim().length == 0) return;
if (task.trim().length > 60) return;


    setTasks((oldTasks) => {
        return [
        ...oldTasks, {id: Date.now(), task: task.trim(), done: false}
    ]});
}



    return(
        <>
        <input type="text"
        value={task}
        onChange={(event) => { setTask(event.target.value) }}
         placeholder="Enter new task" 
         className="input" />
         <button
         className="btn"
         onClick={addTask}>Add</button>
</>
    )
}