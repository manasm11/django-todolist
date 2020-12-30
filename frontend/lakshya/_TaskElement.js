// import { useEffect, useRef } from 'react';
import React, { Component } from 'react';
// export default function _TaskElement({task}){
//     const taskRef = useRef()
//     function updateTask(){
//         console.log("updateTask")
//         taskRef.current.checked && taskRef.current.removeAttribute('checked') || taskRef.current.setAttribute('checked', "")
//     }

//     useEffect(updateTask, [task.complete])
// return (
//     <form>
//         {task.title}
//         <input type="checkbox" ref={taskRef} checked={task.completed} onClick={()=>task.completed = !task.completed}/>
//     </form>
// )
// }

class _TaskElement extends Component {
    // state = {}
    render() {
        const { task } = this.props;
        return (
            <form>
                {task.title}
                <input type="checkbox" checked={task.completed} onClick={() => this.props.onchange(task)} />
            </form>
        );
    }
}

export default _TaskElement;