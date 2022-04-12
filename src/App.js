import './App.css';
import {useState} from 'react';
import Landing from '../src/components/Landing/Landing';
import LogIn from '../src/components/SignInSignUp/Login';
import SignUp from '../src/components/SignInSignUp/Signup';
import PhnOtp from '../src/components/SignInSignUp/PhnOtp';
import UserForm from '../src/components/Registration/UserForm';
import HospSignup from '../src/components/SignInSignUp/HospSignup';
import HospSignIn from '../src/components/SignInSignUp/HospSignIn';
import HospDash from '../src/components/Dashboard/HospDash';
import PaitentDash from '../src/components/Dashboard/PaitentDash';
import { Routes, Route } from "react-router-dom";
import {auth} from './firebase';
function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const signOut = () =>{
    auth.signOut().then(()=>{
      localStorage.removeItem('user')
      setUser(null);
    })
  }
  return (
    <div className="App">
      {/* {
          !user ?
          <Login setUser={setUser}/>
          :
          <Home signOut={signOut} user={user} />
        } */}
      
      {/* <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/signup' element={<SignUp setUser/>}/>
        <Route path='/verify' element={<PhnOtp />}/>
        <Route path='/userform' element={<UserForm />}/>
        <Route path='/HospRegister' element={<HospSignup />}/>
        <Route path='/HospLogin' element={<HospSignIn />}/>
        <Route path='/Hospital' element={<HospDash />}/>
        <Route path='/dashboard' element={<PaitentDash />}/>
      </Routes> */}

      <HospDash />
    </div>
  );
}

export default App;
