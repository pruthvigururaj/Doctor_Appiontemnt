import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Booking from './Components/Booking';
import Confirmation from './Components/Confirmation';
import { BrowserRouter as Router,Route,Routes ,Link} from 'react-router-dom';

function App() {
  return (
    
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Booking />} />
          <Route path='/confirmation' element={ <Confirmation />} />
        </Routes>
    </Router>
  );
}

export default App;
