import { format, formatDistanceToNow } from 'date-fns';
import { useCreateNewComment } from '../hooks/useCreateNewComment';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
  const { createNewComment, comments, newComment, setNewComment, deleteComment } = useCreateNewComment();
  
  const publishedDateFormatted = format(publishedAt, "LLLL do 'at' HH:mm'h'");
  const publishedDateFromNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function handleCreateNewComment(e) {
    createNewComment(e);
    e.target.postCommentButton.blur();
  }

  function handleOnInvalid(e) {
    e.target.setCustomValidity('Please enter a comment');
  }

  function handleChangeCommentContent(e) {
    e.target.setCustomValidity('');
    setNewComment(e.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar 
            src={author.avatarUrl} 
            alt="Author avatar"
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateFromNow}</time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }

          if (line.type === 'link') {
            return <p key={line.content}><a href={line.href}>{line.content}</a></p>
          }
        })}
      </div>

      <form 
        className={styles.commentForm}
        onSubmit={handleCreateNewComment}
      >
        <strong>Comments</strong>
        
        <textarea 
          placeholder='Your comment here'
          value={newComment}
          onChange={handleChangeCommentContent}
          required
          onInvalid={handleOnInvalid}
        />

        <footer>
          <button type='submit' name='postCommentButton'>Post</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment 
            key={comment.id} 
            content={comment.content} 
            onDeleteComment={deleteComment} 
            id={comment.id}
          />
        ))}
      </div>
    </article>
  )
}