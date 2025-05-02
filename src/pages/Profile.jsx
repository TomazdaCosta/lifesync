import React from 'react'
import { AppContext } from '../contexts/appContext'
import Navigation from '../components/Navigation'
import InputComponent from '../components/InputComponent'
import BarraMobile from '../components/BarraMobile'
import styles from '../styles/Profile.module.css'

const Profile = () => {
  const { userName, addUserName, changeUserName, funcChangeUserName } = React.useContext(AppContext)
  

  return (
    <>
      <div className={styles.generalContainer}>
        <div className={styles.profileContainer}>
          <Navigation pageTitle='Perfil' classNav={styles.navColor} clasHomeImg={styles.homeImgColor}/>

          <div className={styles.container}>
            <p>Nome de Usuário:</p>

            <div className={styles.containerUserChange}>
              <p>{userName}</p>

              <button
                onClick={() => funcChangeUserName()}
              >alterar</button>
            </div>

            <div className={changeUserName === true ? styles.containerInputActived : styles.containerInputDisabled}>
              <InputComponent typeInput='text' nameInput='changeUserName' idInput='changeUserName' valueInput={userName} handleInput={addUserName} required/>

              <button
                onClick={() => funcChangeUserName()}
              >Salvar</button>
            </div>
          </div>
        </div>

        <div  className={styles.barContainer}>
          <BarraMobile />
        </div>
      </div>
    </>
  )
}

export default Profile
