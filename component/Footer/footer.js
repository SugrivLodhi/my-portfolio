import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
     <h4>@2023 Sugriv Lodhi All right Reserve</h4>
     <div className={styles.icons}>
     <AiFillGithub size ="1.5rem" />
     <AiFillLinkedin size="1.5rem"/>
     </div>
    </div>
  )
}

export default Footer