import React from 'react';
import Header from "./components/header"; 
import Converter from "./components/converter"; 
import MyChartComponent from "./components/MyChartComponent";
import Footer from "./components/footer"; 

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Converter />
      {/* <MyChartComponent />  */}
      <Footer />
    </div>
  );
}

export default App;
