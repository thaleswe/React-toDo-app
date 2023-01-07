import { ITaskProps } from "./Task.vars"
import { Trash } from "phosphor-react"

import styles from "./Task.module.css"

export function Task({ appUseState, id, appTasks, taskText, onDeleteTask, onCompleteTask }: ITaskProps) {
    return (
        <div className={styles.task}>
            <input onChange={(event) => onCompleteTask(appTasks, appUseState, id, event)} type="checkbox"/>
            <div className={styles.taskText}>{taskText}</div>
            <button onClick={(event) => { onDeleteTask(appTasks, appUseState, id) }}><Trash size={20}/></button>
        </div>
    )
}