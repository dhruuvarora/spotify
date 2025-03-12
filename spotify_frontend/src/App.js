import './output.css';
import { BrowserRouter , Routes , Route, Navigate } from 'react-router-dom';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home';
import LoggedInHomeComponent from './routes/LoggedInHome';
import UploadSong from './routes/UploadSong';
import { useCookies } from 'react-cookie';

// Remove or comment out these lines as they're not needed
// window.cloudinary = window.cloudinary || {};
// window.cloudinary.applyUploadWidget = window.cloudinary.createUploadWidget;

function App() {

  const[cookie , setCookie] = useCookies(["token"]);
  console.log(cookie.token);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>

      {cookie.token ? (

        // Logged In Routes

      <Routes>
      {/* Adding Routes Components here ...*/}

      <Route path='/home' element={<LoggedInHomeComponent/>}/>

      <Route path = '/uploadSong' element = {<UploadSong/>}/>

      <Route path='/*' element={<Navigate to = "/home"/>}/>
      <></>
      </Routes>
      ) : (

        // Logged Out Routes

        <Routes>

      <Route path='/home' element={<HomeComponent/>}/>

      <Route path = "/login" element = {<LoginComponent/>}/>

      <Route path = "/signup" element = {<SignupComponent/>}/>

      <Route path='/*' element={<Navigate to = "/login"/>}/>

        </Routes>

      )}
      
      </BrowserRouter>
    </div>
  );
}

export default App;
