import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class contact extends Component {

  render() {
    return (

    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Bordeaux</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0659084550">
                <span className="clickInput" onClick={() => { alert('Téléphone copié !'); }}>06 59 08 45 50</span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="julien.azbrg@gmail.com">
                <span className="clickInput" onClick={() => { alert('E-mail copié !'); }}>julien.azbrg@gmail.com</span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.youtube.com/channel/UCHGLV13U7YRbjrKpqfbtyYg/videos" target="_blank" rel="noopener noreferrer">
              <h4>Youtube</h4>
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://github.com/JustFS" target="_blank" rel="noopener noreferrer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/KobeKenjo" target="_blank" rel="noopener noreferrer">
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://codepen.io/ju-az" target="_blank" rel="noopener noreferrer">
              <h4>CodePen</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default contact;