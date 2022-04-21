import './App.css';
// import {useState} from 'react';
import Landing from '../src/components/Landing/Landing';
import LogIn from '../src/components/SignInSignUp/Login';
import SignUp from '../src/components/SignInSignUp/Signup';
import PhnOtp from '../src/components/SignInSignUp/PhnOtp';
import UserForm from '../src/components/Registration/UserForm';
import HospForm from './components/Registration/HospForm';
import HospSignup from '../src/components/SignInSignUp/HospSignup';
import HospSignIn from '../src/components/SignInSignUp/HospSignIn';
import HospDash from '../src/components/Dashboard/HospDash';
import DocDash from '../src/components/Dashboard/DocDash';
import HospPaitentDash from '../src/components/Dashboard/HospPaitentDash';
import PatientDash from '../src/components/Dashboard/PatientDash';
import { Routes, Route } from "react-router-dom";
import Vitals from './components/Dashboard/Vitals/Vitals';
import Diagnosis from './components/Dashboard/Diagnosis/Diagnosis';
// import {auth} from './firebase';
// import {useAuthState} from 'react-firebase-hooks/auth';
function App() {

  // const [user] = useAuthState(auth);
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  // const signOut = () =>{
  //   auth.signOut().then(()=>{
  //     localStorage.removeItem('user')
  //     setUser(null);
  //   })
  // }
  return (
    <div className="App">
      {/* {
        user ?
        <PatientDash />
        :
        <Landing/>
      } */}
    
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/verify' element={<PhnOtp />}/>
        <Route path='/userform' element={<UserForm />}/>
        <Route path='/Hospform' element={<HospForm />}/>
        <Route path='/HospRegister' element={<HospSignup />}/>
        <Route path='/HospLogin' element={<HospSignIn />}/>
        <Route path='/Hospital' element={<HospDash />}/>
        <Route path='/DoctorDash' element={<DocDash />}/>
        <Route path='/PaitentDash' element={<HospPaitentDash />}/>
        <Route path='/Vitals' element={<Vitals />}/>
        <Route path='/Diagnosis' element={<Diagnosis />}/>
        <Route path='/Dashboard' element={<PatientDash />}/>
      </Routes>
    </div>
  );
}

export default App;
