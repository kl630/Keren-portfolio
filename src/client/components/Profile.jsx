import React from 'react';
import Keren from '../../images/Keren.png'

const Profile = (() => {
  return (<div className="profile">
    <img className="Keren-img" src={Keren} alt="Keren-profile-picture" />
    <h2>Hello.</h2>
    <div className="Keren-description">
      <p>I am a passionate full stack software engineer. I have experience with JavaScript, TypeScript, Python, Reactjs, Nodejs, Express, Nextjs, MongoDB, and PostGres. Since I was a child, I have enjoyed solving problems- from a jigsaw puzzle to a complicated Sudoku puzzle, which I’m still obsessed with. <br /><br />I am an experienced educator who is making a career switch to become a software engineer. I hold a Master's Degree in Education from</p><p className="columbia">Teachers College, Columbia University.</p> <p>With a strong background in teaching and curriculum development, I have developed a passion for using technology to enhance the learning experience and streamline educational processes.<br /><br />With a keen eye for detail and a drive to succeed, I am a fast learner who is dedicated to making a positive impact through technology.</p>
    </div>
    <button className="btn" type="submit" onClick={() => window.open('https://drive.google.com/file/d/1avBQL7v5-48Y214KLkb8Fg_jD0L0Vs_0/view?usp=sharing', '_blank')}>Résumé</button>
  </div>);
});

export default Profile;