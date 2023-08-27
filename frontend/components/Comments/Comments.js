import React from 'react';
import Comment from './Comment';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log(comments)
  return (
    <div className='comments-wrapper'>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {
        comments.map(comment => 
          <Comment key={comment.id} comment={comment}/>
        )
      }
    </div>
  );
};

export default Comments;
