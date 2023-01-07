import { ChangeEvent, FormEvent, InvalidEvent } from "react";
import { ITask } from "../Task/Task.vars";

class AddTaskVars {
    handleAddTaskSubmit(setAddTaskText:React.Dispatch<React.SetStateAction<string>> ,event: FormEvent) {
        event.preventDefault();

        setAddTaskText("");
    }
    
    handleAddTaskChange(setAddTaskText:React.Dispatch<React.SetStateAction<string>>, event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("");
        
        setAddTaskText(event.target.value);
    }

    handleAddTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        return event.target.setCustomValidity("Adicione uma task!")
    }
}

interface IAddTaskProps {
    appTasks: ITask[];
    appUseState: React.Dispatch<React.SetStateAction<ITask[]>>;
    onCreateTask: (task:ITask[], addTaskText: string, setNewTask:React.Dispatch<React.SetStateAction<ITask[]>>) => void;
}

const addTaskVars = new AddTaskVars();

export { addTaskVars };
export type { IAddTaskProps };