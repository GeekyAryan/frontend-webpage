
import Header from './Components/userinterface/usercomponents/Header';
import Home from './Components/userinterface/screens/Home';
import { Router } from '@mui/icons-material';
import Home2 from './Components/userinterface/screens/Home2';

function App() {
  return (
    <div>
{/* 
      <Router>
        <Routes>
        <Route element={<Home/>} path={"/home"} />
        </Routes>
      </Router> */}

      {/* <Home/> */}
      <Home2 />
      
    </div>
  );
}

export default App;
