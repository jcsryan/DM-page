import React, {useState} from 'react';
import Navlist from './components/navlist/Navlist';
import About from './components/About/about';
import Pricing from './components/Pricing/pricing';
import Games from './components/Games/games';
import Contact from './components/Contact/contact';
import Foot from './components/Foot/foot';
import Us from './components/Us/us';
import Illustration from './components/Illustration/illustration'

function App() {
  const [ currentPage, handlePageChange] = useState('About')

  const renderPage = () => {
    switch(currentPage) {
      case 'Games':
        return <Games/>
     case 'Get in Touch':
        return <Contact/>;
      case 'Pricing':
        return <Pricing/>;
      case 'About' :
        return <About/>;
      case 'Who we are' :
        return <Us/>;
      case 'Character Illustration':
        return <Illustration/>
      default:
        return <About/>
    }
  }
  return (
    <div className="body">
      <header className="header">
      </header>
      <div className="navbar">
      <Navlist currentPage={currentPage} handlePageChange={handlePageChange}></Navlist>
     </div>
      <div class ="feather">
        {renderPage()}
         <br></br>
         <br></br>
         <br></br>
         
      </div>
     
    </div>
  );
}

export default App;
