import React from 'react'
import BarraMobile from '../components/BarraMobile'
import { AppContext } from '../contexts/appContext'
import Navigation from '../components/Navigation'
import InputComponent from '../components/InputComponent'
import styles from '../styles/Finances.module.css'

const Finances = () => {
  const { movement, SetMovement, movementValue, SetMovementValue, nature, SetNature, financesList, addFinancesList, totalFinances, removeFinances } = React.useContext(AppContext)

  return (
    <>
      <div className={styles.generalContainer}>
        <div className={styles.financesContainer}>
          <Navigation pageTitle='Finanças' classNav={styles.navColor} clasHomeImg={styles.homeImgColor}/>
        
          <section className={styles.containerFinances}>
            <p>Adicione informações no seu controle de finanças.</p>

            <form className={styles.formFinances}>
              <InputComponent nameLabel='Movimentação' typeInput='text' nameInput='movement' idInput='movement' valueInput={movement} handleInput={SetMovement} placeholderValue='Digite o titulo da movimentação' required/>

              <InputComponent nameLabel='Valor da movimentação' typeInput='number' nameInput='movementValue' idInput='movementValue' valueInput={movementValue} handleInput={SetMovementValue} placeholderValue='Digite o valor da movimentação' required/>

              <label htmlFor="natures">Natureza</label>
              <select
                name="natures"
                id="natures"
                required
                value={nature}
                onChange={(e) => SetNature(e.target.value)}
              >
                <option value="disabled" selected disabled>Selecione a natureza da movimentação</option>
                <option value="entry">Entrada</option>
                <option value="outflow">Saída</option>
              </select>

              <button
                onClick={(e) => addFinancesList(e)}
              >Adicionar</button>
            </form>
          </section>

          <section className={styles.containerLaunchsBg}>
            <p>Resumo</p>
            
            <div className={styles.containerLaunchs}>
              {financesList.length ? financesList.map((launch) => (
                <div key={launch.id} className={styles.launch}>
                    <div className={launch.nature === 'entry' ? styles.launchEntry : styles.launchOutflow}>
                      <p>{launch.movement}</p>
                      <p>{launch.nature === 'entry' ? '+ ' : '- '}R$ {launch.movementValue}</p>
                    </div>

                    <button
                      onClick={() => removeFinances(launch.id)}
                    >remover</button>
                </div>
              )) : <div>
                  <p>Você não possui lançamentos financeiros adicionados.</p>
                </div>}
            </div>
            
            <p>Total: R${totalFinances}</p>
          </section>
        </div>

        <div className={styles.barContainer}>
          <BarraMobile />
        </div>
      </div>
    </>
  )
}

export default Finances
