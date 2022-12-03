import { HandsClapping, ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';
import { useApplaud } from '../hooks/useApplaud';

import styles from './Comment.module.css';

interface CommentProps {
  id: number;
  content: string;
  onDeleteComment: (id: number) => void;
}

export function Comment({ id, content, onDeleteComment }: CommentProps) {
  const { applauds, incrementApplaud } = useApplaud()
  
  function handleDeleteComment() {
    onDeleteComment(id);
  }
  
  function handleApplaud() {
    incrementApplaud();
  }

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
            
            <button 
              title='Delete comment'
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>


          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleApplaud}>
            <HandsClapping size={20} />
            Applaud <span>{applauds}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}