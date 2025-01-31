import './output.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';

function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
      <Routes>
        {/* Adding Routes Components here ...*/}
        <Route path = "/login" element = {<LoginComponent/>}/>

        <Route path = "/signup" element = {<SignupComponent/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
