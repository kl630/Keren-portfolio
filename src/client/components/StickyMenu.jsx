import React from 'react';

const StickyMenu = (() => {
  return (<div className="sticky-menu">
    <button className="sticky-btn" type="submit" onClick={() => window.open('https://docs.google.com/document/d/1AxdV6pTJQovGrJIb-DlGZn5TKOuLd2YpH_oA8Kop8pU/edit?usp=share_link', '_blank')}>Résumé</button>
    <button className="sticky-btn" type="submit" onClick={() => window.location='mailto:kl2775@tc.columbia.edu'}>CONTACT ME</button>
    <button className="sticky-btn" type="submit" onClick={() => window.open('https://www.linkedin.com/in/kerenliu816', '_blank')}>LinkedIn</button>
    <button className="sticky-btn" type="submit" onClick={() => window.open('https://www.github.com/kl630', '_blank')}>GitHub</button>
  </div>);
});

export default StickyMenu;