import React from 'react';
import PortfolioFixed from './components/PortfolioFixed.jsx';
import PortafolioContent from './components/PortfolioContent.jsx';

class App extends React.Component{
  render(){
    return(
      <div id="app-container" >
        <PortfolioFixed />
        <PortafolioContent />
      </div>
    );
  }
}


export default App;
