import React from "react";
import "./App.css";
import Header from "./components/Header";
import StartForm from "./components/StartForm";
import ToDoList from "./components/ToDoList";
import SearchBox from "./components/SearchBox";
import CompletedItems from "./components/CompletedItems";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <StartForm />
      <ToDoList />
      <hr></hr>
      <CompletedItems />
    </div>
  );
}

export default App;
