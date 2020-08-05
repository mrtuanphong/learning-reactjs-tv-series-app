import React, { Component } from "react";
import "./App.css";
import "whatwg-fetch";
import Main from "../Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series List</h1>
        </header>
        <main className="App-main">
          <Main />
        </main>
        <footer className="App-footer">Data is from tvmaze.com</footer>
      </div>
    );
  }
}

export default App;
