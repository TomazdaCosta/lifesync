import React from 'react'
import { AppContext } from '../contexts/appContext'
import BarraMobile from '../components/BarraMobile'
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'

const Home = () => {
  const { userName, addUserName, modalUser, changeModalUser } = React.useContext(AppContext)

  return (
    <>
      <div className={styles.generalContainer}>
        <div className={styles.container}>
          <header>
            <h1 className={styles.title}>Olá, {userName}!</h1>
            <p className={styles.content}>Aqui estão as aréas nas quais podemos te ajudar a organizar-se da melhor forma</p>
          </header>

          <section>
            <ul className={styles.navigationPages}>
              <Link to='/finances'><li className={styles.finances}>Finanças</li></Link>
              <Link to='/goals'><li className={styles.goals}>Metas</li></Link>
              <Link to='/notes'><li className={styles.notes}>Notas</li></Link>
              <Link to='/tasks'><li className={styles.tasks}>Tarefas</li></Link>
            </ul>
          </section>

          <div className={modalUser === true ? styles.containerModal : styles.disabledModal}>
            <div className={styles.modalHome}>
              <h1>Bem-vindo ao seu organizador!</h1>
              <p>Aqui você vai conseguir organizar sua vida pessoal como sempre desejou. Desde sua vida financeira, tarefas diárias, metas e notas rápidas.</p>

              <div className={styles.formModal}>
                <label htmlFor="userName">Para iniciar, informe o seu nome:</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={userName}
                  onChange={(e) => addUserName(e.target.value)}
                />

                <button
                  onClick={() => changeModalUser()}
                >Iniciar</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.barContainer}>
          <BarraMobile />
        </div>
      </div>
    </>
  )
}

export default Home
