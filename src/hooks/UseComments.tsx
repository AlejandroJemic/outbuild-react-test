import axios from 'axios';
import { useEffect, useState } from 'react';
import  Comment from '../types/CommentType';

const useComments = (): Comment[]  => {
    const [comments, setComments] = useState<Comment[]>([]);
  
    useEffect(() => {
      axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
        .then((response) =>{
          const commentsData: Comment[]  = response.data.map((comment: Comment) => ({
            id: comment.id,
            name: comment.name,
            email: comment.email,
            body: comment.body,
          }));
          setComments(commentsData);
        })
        .catch((error) => console.error(error));
    }, []);
  
    return comments;
  }

  export default useComments;