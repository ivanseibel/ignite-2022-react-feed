import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Ivan Luis Seibel"
            content="Hello World"
          />
          <Post 
            author="John Doe"
            content="Laborum sit nulla voluptate ipsum occaecat mollit veniam ipsum exercitation laborum do cillum magna."
          />
        </main>
      </div>
    </div>
  )
}
