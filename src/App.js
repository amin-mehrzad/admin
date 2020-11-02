//import logo from './logo.svg';
//import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


import * as React from "react";
import {Resource, Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

//import { CommandList, CommandCreate, CommandEdit, CommandShow, CommandIcon } from './commands';
import { CommandList } from './commands';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
console.log(dataProvider)
const App = () => (<Admin dataProvider={dataProvider} >
  {/* <Resource name="commands" options={{ label: 'Commands' }} list={CommandList} create={CommandCreate} edit={CommandEdit} show={CommandShow} icon={CommandIcon} /> */}
  <Resource name="users" list={CommandList} />
</Admin>
);

export default App;
