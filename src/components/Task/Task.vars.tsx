interface ITaskProps {
    appTasks: ITask[];
    appUseState: React.Dispatch<React.SetStateAction<ITask[]>>;
    taskText: string;
    id: number;
    onDeleteTask: (tasks:ITask[], setNewTask:React.Dispatch<React.SetStateAction<ITask[]>>, key:number) => void;
    onCompleteTask: (tasks:ITask[] , setNewTask:React.Dispatch<React.SetStateAction<ITask[]>>, id:number, event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ITask {
    id: number;
    taskText: string;
    completed: boolean;
}

export type { ITaskProps, ITask };