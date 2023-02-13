import React from "react";

import "./App.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1>To Do list ✅</h1>
        <Form />
      </header>
    </div>
  );
}

export default App;
