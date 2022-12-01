import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar} 
            src="https://github.com/ivanseibel.png" 
            alt="Author avatar" 
          />
          <div className={styles.authorInfo}>
            <strong>Ivan Seibel</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='First of December at 21:24' dateTime='2022-12-01 21:24'>Published 1h ago</time>
      </header>
      <div className={styles.content}>
      <p>Hey guys 👋</p>

      <p>I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀</p>

      <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>

      <p>
        <a href='#'>#newproject</a>{' '}
        <a href='#'>#nlw</a>{' '}
        <a href='#'>#rocketseat</a>
      </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Comments</strong>
        
        <textarea 
          placeholder='Your comment here' 
        />

        <footer>
          <button type='submit'>Post</button>
        </footer>
      </form>
    </article>
  )
}