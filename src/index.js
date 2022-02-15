// import React from "react"; not necesery cause Raact's 17 new JSX transform
import ReactDOM from "react-dom";

function TemporaryPage() {
  return (
    <div>
      <header>
        <nav>
          <img src="./logo512.png" alt="" width={40} />
        </nav>
      </header>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars in GitHub</li>
        <li>It is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <footer>
        <small>© 2022 Gasparovic development. All rights reserved.</small>
      </footer>
    </div>
  );
}
ReactDOM.render(<TemporaryPage />, document.getElementById("root"));
