import React, { useState } from 'react';
import Charts from './component/charts/Charts';
import Navbar from './component/navbar/Navbar';
import Sidebar from './sidebar/Sidebar';


const App = () => {

const[sidebarOpen, setSidebarOpen] = useState(false)

const openSidebar=()=>{
  setSidebarOpen(true);
}
const closeSidebar = ()=>{
  setSidebarOpen(false);
}

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Charts/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      
    </div>
  );
};

export default App;