import React from 'react';
import  Comment from '../types/CommentType';

type CommentDetailsProps = {
    comment: Comment;
    onClose: () => void;
  }

  const CommentDetails: React.FC<CommentDetailsProps> = ({ comment, onClose }) => (
      <div className="modal">
        <h2>Comment Details</h2>
        <p>ID: {comment.id}</p>
        <p>Name: {comment.name}</p>
        <p>Email: {comment.email}</p>
        <p>Body: {comment.body}</p>
        <button onClick={onClose} style={{ float: 'right' }}>Close</button>
      </div>
    );

export default CommentDetails;