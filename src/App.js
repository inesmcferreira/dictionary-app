import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="travel" />
        </main>
        <footer className="App-footer">
          
          <em><small>Coded by </small></em>
          <a
            href="https://www.instagram.com/inesferreira/"
            target="_blank"
            className="insta"
            rel="noopener noreferrer"
          >
            InêsFerreira
          </a>
          <a
            href="https://github.com/inesmcferreira/dictionary-app"
            target="_blank"
            className="code"
            rel="noopener noreferrer"
          >
            <br />
            Open-source code
          </a>
        </footer>
      </div>
    </div>
  );
}
