import logo from './logo.svg';
import './App.css';
import {
  Container, 
  Row
} from 'reactstrap';

import Navigation from './components/Navbar';

function App() {
  return (
    <div className="screen mh-100" 
    style={{ 
      minHeight: '100vh',
      backgroundColor: '#1C212D' 
      }}>
      <Navigation/>
    </div>
  );
}

export default App;
