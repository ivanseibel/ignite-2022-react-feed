import { HandsClapping, ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ivanseibel.png" alt="Comment author avatar" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ivan Seibel</strong>
              <time title='First of December at 21:24' dateTime='2022-12-01 21:24'>About 1h ago</time>
            </div>          
            
            <button title='Delete comment'>
              <Trash size={24} />
            </button>
          </header>


          <p>Well done Devon, congratulations!</p>
        </div>

        <footer>
          <button>
            <HandsClapping size={20} />
            Applaud <span>18</span>
          </button>
        </footer>
      </div>
    </div>
  )
}