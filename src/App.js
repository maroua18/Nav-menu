import React from 'react';

import './App.css';

import Navmenu from "./components/Navmenu";



const arr=[{title:"about"},{title:"service",sousitem:["For entrepreneur", "for student","for hobbystis"]},{title:"contact"}]

function App() {
  return <div class="app"><Navmenu navItem={arr}/></div>
  
}

export default App;
