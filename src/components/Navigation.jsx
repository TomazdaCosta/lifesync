import React from 'react'
import { Link } from 'react-router-dom'
import homeImg from '../imgs/casa.svg'
import styles from '../styles/Navigation.module.css'

const Navigation = ({ pageTitle, classNav, clasHomeImg }) => {
  return (
    <nav className={styles.container}>
      <li><Link to='/'><img src={homeImg} className={clasHomeImg}/></Link></li>
      <li className={classNav}>{pageTitle}</li>
    </nav>
  )
}

export default Navigation
