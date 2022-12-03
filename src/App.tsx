import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ivanseibel.png',
      name: 'Ivan Seibel',
      role: 'Software Engineer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Hey guys 👋',
      },
      {
        type: 'paragraph',
        content: "I just uploaded another project to my portfolio. It's a experiment with Vitejs and Reactjs 🚀",
      },
      {
        type: 'link',
        content: 'ivanseibel.dev/vitejs-reactjs',
        href: '#',
      },
    ],
    publishedAt: new Date('2022-12-01 21:24:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'CTO Rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Hey guys 👋',
      },
      {
        type: 'paragraph',
        content: "I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀",
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
        href: '#',
      },
    ],
    publishedAt: new Date('2022-12-02 03:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post 
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt} 
            />
          ))}
        </main>
      </div>
    </div>
  )
}
