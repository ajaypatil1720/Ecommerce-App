import logo from './logo.svg';
import './App.css';
import Allrouter from './component/Allrouter';
// import Navbar from './component/Navbar';
import Navbar1 from './component/Navbar';
// import Bootstrapnav from './pages/bootstrapnav';

import '../node_modules/font-awesome/css/font-awesome.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Bootstrapnav/> */}
      <Navbar1  stickey="top"/>
     <Allrouter/>
    </div>
  );
}

export default App;
