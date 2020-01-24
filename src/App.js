import React from 'react';
import './App.css';
import basketballImg from './images/basketballImg.png';
import condoLoggerGif from './images/condoLoggerGif.gif';
import canadianGoImg from './images/canadianGoImg.png';
function App() {
  return (
    <div className="App">
      <header className="header">
        <div>
          <h1 className="noMargin">Mark Wong</h1>
          <p className="noMargin">Hi, I'm Mark Wong. I mostly use React with Google Firebase, but I've worked extensively with ASP.NET and absolutely love SQL. These are my biggest projects!</p>
        </div>
        <div className="linkBox">
          <div className="linkDiv">
            <img src={basketballImg} alt="AIFounded"></img>
            <a className="links" href="https://basketball.aifounded.com" rel="noopener noreferrer" target="_blank"><h4>AIFounded Basketball App</h4></a>
            <p>A fully responsive React App that takes the top NBA players per stat and compares them in neat graphs.</p>
          </div>
          <div className="linkDiv">
            <img src={condoLoggerGif} alt="Condo Logger"></img>
          	<a className="links" href="https://condologger.firebaseapp.com" rel="noopener noreferrer" target="_blank"><h4>Condo Logger</h4></a>
            <p>A React App with a secure Google Cloud FireStore backend used to log every single repair, renovation, and purchase in a Condominium Corporation.</p>
          </div>
          <div className="linkDiv">
            <img src={canadianGoImg} alt="Canadian Go"></img>
            <a className="links" href="https://canadiango.org" rel="noopener noreferrer" target="_blank"><h4>Canadian Go Association</h4></a>
            <p>A multiproject .NET application that required a team to ensure full data access and integration with Tournaments, Certifications, and Administration.</p>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;