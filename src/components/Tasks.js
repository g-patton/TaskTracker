import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
        {tasks.map((task, day) => (
            <Task 
                key={task.id}
                task={task}
                day={day}
                onDelete={onDelete}
                onToggle={onToggle}
            />
        ))}
        </>
    )
}

export default Tasks
