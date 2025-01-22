import './output.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import LoginComponent from './routes/Login';

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
      <Routes>
        {/* Adding Routes Components here ...*/}
        <Route path = "/login" element = {<LoginComponent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
