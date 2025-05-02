import React from 'react'
import BarraMobile from '../components/BarraMobile'
import { AppContext } from '../contexts/appContext'
import Navigation from '../components/Navigation'
import InputComponent from '../components/InputComponent'
import styles from '../styles/Tasks.module.css'

const Tasks = () => {
  const { task, addTaskTitle, renderTaskstList, addTask, removeTask, performTask, changeTasksList, controlTasksSelected, changeControlTasksSelected} = React.useContext(AppContext)

  return (
    <>
      <div className={styles.generalContainer}>
        <div className={styles.tasksContainer}>
    <Navigation pageTitle='Tarefas' classNav={styles.navColor} clasHomeImg={styles.homeImgColor}/>

          <section className={styles.containerForm}>
            <p>Adicione aqui as suas tarefas.</p>

            <form>
              <InputComponent nameLabel='Nova tarefa' typeInput='text' nameInput='task' idInput='task' valueInput={task} handleInput={addTaskTitle} placeholderValue='Digite o titulo da tarefa' required/>

              <button
                onClick={(e) => addTask(e)}
              >Adicionar</button>
            </form>
          </section>

          <section className={styles.containerTasks}>
            <p>Suas tarefas</p>
            
            <div className={styles.containerTasksNav}>
              <button
                className={controlTasksSelected.all === true ? styles.actived : ''}
                onClick={() => {
                  changeTasksList('all')
                  changeControlTasksSelected('all')
                }}
              >Todas</button>
              <button
                className={controlTasksSelected.achieved === true ? styles.actived : ''}
                onClick={() => {
                  changeTasksList('performed')
                  changeControlTasksSelected('achieved')
                }}
              >Feitas</button>
            </div>

            <div className={styles.containerTasksBg}>
              {renderTaskstList.length ? renderTaskstList.map((task) => (
                <div key={task.id} className={styles.task}>
                  <div>
                    <p>{task.taskTitle}</p>
                  </div>

                  {task.completed === false ? <div>
                    <button
                      className={styles.remove}
                      onClick={() => removeTask(task.id)}
                    >✕</button>
                    <button
                      className={styles.achieved}
                      onClick={() => performTask(task.id)}
                    >✓</button>
                  </div> : null}      
                </div>
              )) : <div>
                  <p>Você não possui tarefas adicionadas.</p>
                </div>}
            </div>
          </section>
        </div>

        <div className={styles.barContainer}>
          <BarraMobile />
        </div>
      </div>
    </>
  )
}

export default Tasks
