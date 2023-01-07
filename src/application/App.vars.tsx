import { ITask } from "../components/Task/Task.vars";

class AppVars {
    handleCreateTask(tasks:ITask[] ,addTaskText: string, setNewTask:React.Dispatch<React.SetStateAction<ITask[]>>) {
        setNewTask([...tasks, {
            id: tasks.length + 1,
            taskText: addTaskText,
            completed: false
        }]);
    }

    handleDeleteTask(tasks:ITask[] , setNewTask:React.Dispatch<React.SetStateAction<ITask[]>>, id:number) {
        const tasksWithoutDeletedOne = tasks.filter((task) => {
            return task.id !== id
        });

        setNewTask(tasksWithoutDeletedOne);
    }

    handleCompleteTask(tasks:ITask[] , setNewTask:React.Dispatch<React.SetStateAction<ITask[]>>, id:number, event: React.ChangeEvent<HTMLInputElement>) {
        const taskIndex = tasks.findIndex((task) => {
            return task.id === id;
        });

        const newTasks = [...tasks];
        
        if(event.target.checked === true) {
            newTasks[taskIndex].completed = tasks[taskIndex].completed = true;
        } else if(event.target.checked === false) {
            newTasks[taskIndex].completed = tasks[taskIndex].completed = false;
        }
        
        setNewTask(newTasks)
    }
}

const appVars = new AppVars();

export { appVars };