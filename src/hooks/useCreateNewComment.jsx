import { useState } from "react";

export function useCreateNewComment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  function createNewComment(e) {
    e.preventDefault();

    setComments([...comments, {
      id: Math.random(),
      content: newComment,
    }]);

    setNewComment("");
  }

  function deleteComment(id) {
    setComments(comments.filter(comment => comment.id !== id));
  }

  return { comments, createNewComment, newComment, setNewComment, deleteComment };
}