import _TaskElement from './_TaskElement';

export default function TaskList({tasks}){
    return (
        <div>
            {tasks.map((task) => <_TaskElement key={task.id} task={task}/>)}
        </div>
    )
}