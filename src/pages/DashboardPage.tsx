// src/pages/DashboardPage.tsx
import React, { useEffect, useState } from 'react';
import useComments from '../hooks/UseComments';
import CommentDetails from '../components/CommentDetails';
import Comment from '../types/CommentType';

const DashboardPage: React.FC = () => {
  const [data, setData] = useState<Comment[]>([]);
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);

  const comments: Comment[] = useComments();
  useEffect(() => {
    setData(comments);
  }, [comments]);


  function logout() {
    sessionStorage.removeItem('isLogged');
    window.location.reload();
  }

  return (
    <div className="dashboard-container">

      <div className="dashboard-page">
        <div>
          <h3>ProDashboard <button style={{ float: 'right', marginRight: '10px' }} onClick={logout}>Logout</button></h3>
        </div>
        <div className="comments-container" style={{ maxHeight: '800px', overflowY: 'scroll' }}>
          {data.map(comment => (
            <div key={comment.id} className='line'>
              <div className="comment">
                <div style={{ width: '10px'}}>{comment.id}</div>
                <div>{comment.name}</div>
                <div>{comment.email}</div>
            </div>
              <button onClick={() => setSelectedComment(comment)}>&raquo;</button>
            </div>

          ))}
        </div>
        {selectedComment && <CommentDetails comment={selectedComment} onClose={() => setSelectedComment(null)} />}
      </div>
    </div>
  );
};


export default DashboardPage;
