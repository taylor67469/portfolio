import Homepage from './components/homepage/homepage';
import React from 'react';
import { Routes, Route, HashRouter} from "react-router-dom";
import Projects from "../src/components/projects/projects"
import Blue from "../src/components/projects/blue/blue"
import Chad from "../src/components/projects/chad/chad"
import Expense from "../src/components/projects/expense/expense"
import Mental from "../src/components/projects/mental/mental"
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/projects"} element={<Projects />} />
      <Route path={"/projects/blue"} element={<Blue />} />
      <Route path={"/projects/chad"} element={<Chad />} />
      <Route path={"/projects/expense"} element={<Expense />} />
      <Route path={"/projects/mental"} element={<Mental />} />
    </Routes>
  );
}

export default App;
