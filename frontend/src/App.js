import {SearchBar, TaskList} from './components';
import {useState, useEffect} from 'react';
function App() {
  useEffect(updateTasks, [])
  const [tasks, setTasks] = useState([
    {
      "id":1,
      "title":"LOADING !!!",
      "completed":false
    },
  ]);
  function updateTasks(e){
    console.log("Update Tasks called")
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:8000/api/task-list/')
    xhr.onload = function () {
      setTasks(JSON.parse(xhr.response));
    }
    xhr.send();
  }
   return (
    <>
      <h3 id="heading">Welcome to ToDo List</h3>
      <SearchBar onClick={updateTasks}/>
      <TaskList tasks={tasks}/>
    </>
  );
}

export default App;
