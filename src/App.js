
import './App.css';
import Home from './Pages/Home';
import './assets/css/style.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home />}>
       
      </Route>
    </Routes>
  </Router>

<ToastContainer />
</>
  );
}

export default App;
