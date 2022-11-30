import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="Profile cover image" 
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/ivanseibel.png"
          alt="Profile avatar"
        />
        <strong>Ivan</strong>
        <span>Web developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit your profile
        </a>        
      </footer>
    </aside>
  )
}