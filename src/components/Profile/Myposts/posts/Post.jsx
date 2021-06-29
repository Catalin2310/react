import React from 'react';
import './Post.css';
const Post = (props) => {
  return (

    <div className="post">
    <img src="https://pbs.twimg.com/media/Ez8E0dRWYAUHXo3.jpg"/>
    {props.message}
      </div>

  );

}
export default Post;
