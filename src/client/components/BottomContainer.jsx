import React from 'react';

const BottomContainer = (() => {
  return (<div className="bottom-container">
    {/* TODO: open a new tab for linkedin or github. keep the current page. */}
    <a className="footer-link" href="https://www.linkedin.com/in/kerenliu816" target="_blank">LinkedIn</a>
    <a className="footer-link" href="https://github.com/kl630/" target="_blank">GitHub</a>
    <p className="copyright">© Keren Liu.</p>
  </div>);
});

export default BottomContainer;