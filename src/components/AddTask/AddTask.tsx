import { addTaskVars, IAddTaskProps } from "./AddTask.vars"

import styles from "./AddTask.module.css"
import { PlusCircle } from "phosphor-react"
import { useState } from "react"

export function AddTask({ appTasks, appUseState, onCreateTask }: IAddTaskProps) {
    const [addTaskText, setAddTaskText] = useState("");
    const isAddTaskEmpty = addTaskText.length === 0;

    return (
        <form onSubmit={(event) => {addTaskVars.handleAddTaskSubmit(setAddTaskText, event); onCreateTask(appTasks, addTaskText, appUseState)}} className={styles.addTask}>
            <textarea
                placeholder="Adicione uma nova tarefa"
                required
                value={addTaskText}
                onChange={(event) => addTaskVars.handleAddTaskChange(setAddTaskText, event)}
                onInvalid={addTaskVars.handleAddTaskInvalid}
                maxLength={75} />
            <button type="submit" disabled={isAddTaskEmpty}>Criar <PlusCircle size={"1.5rem"} /></button>
        </form>
    )
}