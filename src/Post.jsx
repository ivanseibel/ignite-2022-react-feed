export function Post({ author, content }) {
  return (
    <p>
      <strong>Author: </strong>{author}<br />
      {content}
    </p>
  );
}
