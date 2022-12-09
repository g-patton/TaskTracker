import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'doctors appt',
        day: 'wed',
        reminder: true,
    },
    {
        id: 2,
        text: 'meeting',
        day: 'thurs',
        reminder: true,
    },
    {
        id: 3,
        text: 'meeting after work',
        day: 'tues',
        reminder: false,
    },
])

// delete task
const deleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    )
    console.log(`deleted task`)
}

// toggle reminder

const toggleReminder = (id) => {
  setTasks(
    tasks.map( (task) =>
      task.id === id ? 
      {...task, reminder : !task.reminder} 
      : task))
}
  
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks 
        tasks={tasks}
        onDelete = {deleteTask} 
        onToggle = {toggleReminder}
      />) : (
        'No Tasks To Show'
      )
    }
    </div>
    
  );
}

export default App;
