import React, { useContext } from 'react'
import BarraMobile from '../components/BarraMobile'
import { AppContext } from '../contexts/appContext'
import Navigation from '../components/Navigation'
import InputComponent from '../components/InputComponent'
import styles from '../styles/Goals.module.css'

const Goals = () => {
  const { newGoal, addNewGoal, timeWindow, addTimeWindow, newGoalsList, addGoalsList, changeGoalsList, goalsAchieved, removeGoal, controlGoalsSelected, changeControlGoalsSelected } = useContext(AppContext)

  return (
    <>
      <div className={styles.generalContainer}>
        <div className={styles.goalsContainer}>
          <Navigation pageTitle='Metas' classNav={styles.navColor} clasHomeImg={styles.homeImgColor}/>

          <section className={styles.containerForm}>
            <p>Adicione aqui as suas metas.</p>

            <form>
              <InputComponent nameLabel='Nova meta' typeInput='text' nameInput='newGoal' idInput='newGoal' valueInput={newGoal} handleInput={addNewGoal} placeholderValue='Digite o titulo da meta' required/>
              
              <label htmlFor="timeWindow">Janela de tempo</label>
              <select
                name="timeWindow"
                id="timeWindow"
                required
                value={timeWindow}
                onChange={(e) => addTimeWindow(e.target.value)}
              >
                <option value="disabled" disabled selected>Selecione a janela de tempo</option>
                <option value="month">Mês</option>
                <option value="bimonthly">Bimestre</option>
                <option value="quarter">Trimestre</option>
                <option value="semestre">Semestre</option>
                <option value="year">Ano</option>
              </select>

              <button
                onClick={(e) => addGoalsList(e)}
              >Adicionar</button>
            </form>
          </section>

          <section className={styles.containerGoalsTime}>
            <p>Suar metas</p>

            <div className={styles.goalsNav}>
              <button
                className={controlGoalsSelected.all === true ? styles.actived : ''}
                onClick={() => {
                  changeGoalsList('all')
                  changeControlGoalsSelected('all')
                }}
              >Todas</button>
              <button
                className={controlGoalsSelected.month === true ? styles.actived : ''}
                onClick={() => {
                  changeGoalsList('month')
                  changeControlGoalsSelected('month')
                }}
              >Mês</button>
              <button
                className={controlGoalsSelected.bimonthly === true ? styles.actived : ''}
                onClick={() => {
                  changeGoalsList('bimonthly')
                  changeControlGoalsSelected('bimonthly')
                }}
              >Bimestre</button>
              <button
                className={controlGoalsSelected.quarter === true ? styles.actived : ''}
                onClick={() => {
                  changeGoalsList('quarter')
                  changeControlGoalsSelected('quarter')
                }}
              >Trimestre</button>
              <button
                className={controlGoalsSelected.semestre === true ? styles.actived : ''}
                onClick={() => {
                  changeGoalsList('semestre')
                  changeControlGoalsSelected('semestre')
                }}
              >Semestre</button>
              <button
                className={controlGoalsSelected.year === true ? styles.actived : ''}
                onClick={() => {
                  changeGoalsList('year')
                  changeControlGoalsSelected('year')
                }}
              >Ano</button>
              <button
                className={controlGoalsSelected.achieved === true ? styles.actived : ''}
                onClick={() => {
                  changeGoalsList('achieved')
                  changeControlGoalsSelected('achieved')
                }}
              >Realizadas</button>
            </div>

            <div className={styles.containerGoals}>
              {newGoalsList.length ? newGoalsList.map((goal) => (
                <div key={goal.id} className={styles.goal}>
                  <p>{goal.newGoal}</p>
                  {goal.timeWindow !== 'achieved' ? <div>
                    <button
                      className={styles.remove}
                      onClick={() => removeGoal(goal.id)}
                    >✕</button>
                    <button
                      className={styles.achieved}
                      onClick={() => goalsAchieved(goal.id)}
                    >✓</button>
                  </div> : null}
                </div>
              )) : <div>
                  <p>Você não possui metas nessa janela de tempo.</p>
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

export default Goals
