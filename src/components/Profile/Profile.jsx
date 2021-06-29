import React from 'react';
import './Profile.css';
import MinePost from './Myposts/Minepost.jsx';

const Profile = () => {
  return (
    <div className="content">
    <div>
    <div/>
  <div className="avatar"><div>Catalin Digori</div><img src="https://pbs.twimg.com/media/Ez8E0dRWYAUHXo3.jpg"/></div>
  </div>
  <MinePost/>
</div>

  );

}
export default Profile;
