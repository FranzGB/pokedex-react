import React from "react";
import Child from "./Child";

const mockData = [
  "First", "Second", "Third"
]
const App:React.FC = (props) => {
  return (<div><h1>Webpack is cool!</h1><Child name={"Franz"} data={mockData}/></div>);
};

export default App;