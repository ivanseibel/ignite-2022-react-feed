import { FormEvent, useState } from "react";

interface Comment {
  id: number;
  content: string;
}

export function useCreateNewComment() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  function createNewComment(e: FormEvent) {
    e.preventDefault();

    setComments([...comments, {
      id: Math.random(),
      content: newComment,
    }]);

    setNewComment("");
  }

  function deleteComment(id: number) {
    setComments(comments.filter(comment => comment.id !== id));
  }

  return { comments, createNewComment, newComment, setNewComment, deleteComment };
}