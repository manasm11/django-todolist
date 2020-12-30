import {useEffect, useRef} from 'react';
export default function _TaskElement({task}){
    const taskRef = useRef()
    function updateTask(){
        console.log("updateTask")
        taskRef.current.checked && taskRef.current.removeAttribute('checked') || taskRef.current.setAttribute('checked', "")
    }
    useEffect(updateTask, [task.complete])
    return (
        <form>
            {task.title}
            <input type="checkbox" ref={taskRef} checked={task.completed} onClick={()=>task.completed = !task.completed}/>
        </form>
    )
}