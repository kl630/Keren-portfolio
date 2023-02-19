import React from 'react';

const ContactMe = (() => {
  return (<div className="contact-me">
    <h2>Get In Touch</h2>
    <h4>I look forward to connecting with you.</h4>
    <button className="btn" type="submit" onClick={() => window.location='mailto:kl2775@tc.columbia.edu'}>CONTACT ME</button>
    <button className="btn" type="submit" onClick={() => window.open('https://www.linkedin.com/in/kerenliu816', '_blank')}>LinkedIn</button>
    <button className="btn" type="submit" onClick={() => window.open('https://www.github.com/kl630', '_blank')}>GitHub</button>
  </div>);
});

export default ContactMe;