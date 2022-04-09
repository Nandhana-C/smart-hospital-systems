import './App.css';
import Landing from '../src/components/Landing/Landing';
import LogIn from '../src/components/SignInSignUp/Login';
import SignUp from '../src/components/SignInSignUp/Signup';
import PhnOtp from '../src/components/SignInSignUp/PhnOtp';
import HospSignup from '../src/components/SignInSignUp/HospSignup';
import HospSignIn from '../src/components/SignInSignUp/HospSignIn';
import HospDash from '../src/components/Dashboard/HospDash';
import PaitentDash from '../src/components/Dashboard/PaitentDash';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/verify' element={<PhnOtp />}/>
        <Route path='/HospRegister' element={<HospSignup />}/>
        <Route path='/HospLogin' element={<HospSignIn />}/>
        <Route path='/Hospital' element={<HospDash />}/>
        <Route path='/dashboard' element={<PaitentDash />}/>
      </Routes>
    </div>
  );
}

export default App;
