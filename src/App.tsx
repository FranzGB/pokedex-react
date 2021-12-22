import React from "react";
import { Outlet } from "react-router-dom";
import Child from "./Child";
import Navbar from "./Navbar";
const mockData = [
  "First", "Second", "Third"
]

const App:React.FC = (props) => {
  return (
    <div>
      <Navbar />
      <h1>Webpack is cool!</h1>
      <Child name={"Franz"} data={mockData}/>
      <Outlet />
    </div>
    );
};

export default App;
