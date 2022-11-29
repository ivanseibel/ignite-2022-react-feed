import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './Post'

import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Ivan Luis Seibel"
        content="Hello World"
      />
      <Post 
        author="John Doe"
        content="Laborum sit nulla voluptate ipsum occaecat mollit veniam ipsum exercitation laborum do cillum magna."
      />
    </div>
  )
}
