import React from 'react'
import styles from '../styles/InputComponent.module.css'

const InputComponent = ({ nameLabel, typeInput, nameInput, idInput, valueInput, handleInput, placeholderValue, ...props }) => {
  return (
    <>
      <label htmlFor={idInput} className={styles.label}>{nameLabel}</label>
      
      <input
        type={typeInput}
        name={nameInput}
        id={idInput}
        className={styles.input}
        value={valueInput}
        onChange={(e) => handleInput(e.target.value)}
        placeholder={placeholderValue}
        {...props}
      />
    </>
  )
}

export default InputComponent
