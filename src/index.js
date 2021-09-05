import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Sidebar from "./containers/Sidebar";
// import ClickCountButton from "./containers/Count";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Sidebar 
    title="Class Component"
    data={{
      username: "@dev_ed"
    }}    
    />  */}
    {/* <ClickCountButton /> */}
  </React.StrictMode>,
  document.getElementById('root')
);