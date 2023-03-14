import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={process.env.PUBLIC_URL + '/logo192.png'} alt="Logo" />
        <button className={activeTab === 1 ? 'tab-button active' : 'tab-button'} onClick={() => handleTabClick(1)}>Tab 1</button>
        <button className={activeTab === 2 ? 'tab-button active' : 'tab-button'} onClick={() => handleTabClick(2)}>Tab 2</button>
        <button className={activeTab === 3 ? 'tab-button active' : 'tab-button'} onClick={() => handleTabClick(3)}>Tab 3</button>
      </div>
      <div className="content">
        <div className={activeTab === 1 ? 'page-container active' : 'page-container'}>Page 1</div>
        <div className={activeTab === 2 ? 'page-container active' : 'page-container'}>Page 2</div>
        <div className={activeTab === 3 ? 'page-container active' : 'page-container'}>Page 3</div>
      </div>
    </div>
  );
}

export default App;

