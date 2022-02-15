// import React from "react"; not necesery cause Raact's 17 new JSX transform
import ReactDOM from "react-dom";
import "./index.css";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./logo512.png" alt="react-logo" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars in GitHub</li>
        <li>It is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Gasparovic development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));
