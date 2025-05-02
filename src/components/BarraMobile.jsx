import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Barra.module.css'
import imgProfile from '../imgs/user_456212 1.svg'
import imgMenu from '../imgs/interface_12383011 1.svg'
import { AppContext } from '../contexts/appContext'

const BarraMobile = () => {
  const { activeMenu, changeMenu } = React.useContext(AppContext)

  return (
    <div className={styles.bar}>
      <div>
        <ul className={styles.barFlex}>
          <Link to='/profile'><li><img src={imgProfile}/> <span>Perfil</span></li></Link>
          <li>
          <button
            onClick={() => changeMenu()}
          ><img src={imgMenu}/>menu</button></li>
        </ul>

        <div className={activeMenu === false ? styles.desactivated : styles.active}>
          <ul className={styles.menuBar}>
            <Link to='/finances'><li>Finanças</li></Link>
            <Link to='/goals'><li>Metas</li></Link>
            <Link to='/notes'><li>Notas</li></Link>
            <Link to='/tasks'><li>Tarefas</li></Link>
            <Link to='/profile'><li>Perfil</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BarraMobile
