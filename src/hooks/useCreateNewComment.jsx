import { useState } from "react";

export function useCreateNewComment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  function handleCreateNewComment(e) {
    e.preventDefault();

    setComments([...comments, {
      id: Math.random(),
      content: newComment,
    }]);

    setNewComment("");
  }

  return { comments, handleCreateNewComment, newComment, setNewComment };
}