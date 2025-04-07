import { useEffect, useState } from "react"

export default function Tasks({tasks, setTasks}) {


const [searchQuery, setSearchQuery] = useState('');
const [results, setResults] = useState([]);

useEffect(() => {
    setResults(() => {
        return tasks.filter((task) => (task.task.includes(searchQuery)));
    });


}, [searchQuery, tasks]);


function onChecked(task) {
    setTasks((oldTasks) => {
        return oldTasks.map((oldTask) => {
            if (oldTask.id == task.id) {
                return {
                    id: oldTask.id, 
                    task: oldTask.task,
                    done: !oldTask.done
                }
            } else {
                return oldTask
            }
        })
    })
}

function remove(taskToRemove) {
    setTasks((oldTasks) => {
        return oldTasks.filter((oldTask) => (
            oldTask.id !== taskToRemove.id
        ));
    });
}



    return (
        <>
        <input type="text" placeholder="Search" className="input block" value={searchQuery} onChange={(event) => {setSearchQuery(event.target.value)}} />
        <ul>
            {results.map((task) => (
                <li key={task.id}>
                    <input type="checkbox" className="checkbox m-2" checked={task.done} onChange={() => {
                        onChecked(task)
            }}/>
                    
                    {task.task}
                    <button className="btn btn-error" onClick={() =>{
                        remove(task);
                    }}>Remove</button>
                    </li>
            ))}
        </ul>
        </>
    )
}