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
          <small>Coded by Inês Ferreira</small>
          <em>This page was built by </em>
          <a
            href="https://www.instagram.com/inesferreira/"
            target="_blank"
            className="insta"
            rel="noopener noreferrer"
          >
            InêsFerreira
          </a>
        </footer>
      </div>
    </div>
  );
}
