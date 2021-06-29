import React from 'react';
import './Minepost.module.css';
import Post from'./posts/Post.jsx';

const Minepost = () => {
  return (
    <div className="postp">
      <div className="posting">
<textarea name="" id="" cols="30" rows="10"></textarea>
<button>Add post</button>
<Post message="how r u"/>
<Post message ="it`s my 1st post"/>
</div>
</div>
  );
}

export default Minepost;
