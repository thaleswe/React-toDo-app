import { Header } from "../components/Header/Header"
import { AddTask } from "../components/AddTask/AddTask"
import { Task } from "../components/Task/Task"

import clipboard from "../assets/Clipboard.png"

import "./global.css"
import styles from "./App.module.css"
import { useState } from "react"
import { ITask } from "../components/Task/Task.vars"
import { appVars } from "./App.vars"


export function App() {
  const [tasks, setNewTask] = useState<ITask[]>([]);
  const completedTasksCount = tasks.reduce((acc, task) => (task.completed === true ? acc + 1 : acc), 0);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <AddTask appUseState={setNewTask} appTasks={tasks} onCreateTask={appVars.handleCreateTask} />
        <main>
          <div className={styles.todo}>
            <div className={styles.infoTask}>
              <div className={styles.createdTasks}>
                <span>Tarefas criadas</span>
                <span className={styles.count}>{tasks.length}</span>
              </div>

              <div className={styles.completedTasks}>
                <span>Concluídas</span>
                <span className={styles.count}>{completedTasksCount} de {tasks.length}</span>
              </div>
            </div>
            <div data-vanish={tasks.length !== 0} className={styles.emptyTask}>
              <span>
                <img src={clipboard} alt="Lista vazia" draggable={false} />
              </span>
              <span className={styles.notice}>
                <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </span>
            </div>
            <div data-vanish={tasks.length === 0} className={styles.taskWrapper}>
              {tasks.map((task) => {
                return <Task
                  key={task.id}
                  id={task.id}
                  appUseState={setNewTask}
                  appTasks={tasks}
                  taskText={task.taskText}
                  onCompleteTask={appVars.handleCompleteTask}
                  onDeleteTask={appVars.handleDeleteTask} />
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
};
