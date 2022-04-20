import React,{ useState } from 'react';
// import styled from 'styled-components';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
// import { firebase, auth } from '../../firebase';
import {auth, provider,db, storage} from '../../firebase'
// import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

function SignUp(props) {
    const Navigate = useNavigate();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
                uid: result.user.uid
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            props.setUser(newUser);

            db.collection('/users').doc(newUser.uid).set({
                name : newUser.name,
                photo: newUser.photo,
                number: phoneNo
            })
            Navigate('/Dashboard');
            var storageRef = storage.ref('/'+ (newUser.uid));
            storageRef.child(newUser.name).put();
    

        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [rePasswd, setRePasswd] = useState("");
    // const [otp, setOtp] = useState('');
    // const [show, setshow] = useState(false);
    // const [final, setFinal] = useState('');
    // const [modalIsOpen, setIsOpen] = useState(false);
    const paperStyle = { padding: '30px 20px', width: 400, margin: '20px auto', borderRadius:'50px'};
    const avatarStyle = { backgroundColor: '#023047' };
    const headerStyle = { margin: 0 };
    const btnStyle = { backgroundColor: '#FFB703', color: 'white', margin: '10px auto' };
    const typoStyle = {margin:'10px', padding:'5px', textAlign:'left'};
    const formStyle = {margin:'2px', padding:'5px'};
    const textStyle = {margin:'5px', padding:'2px'};
    // const customStyles = {
    //     content: {
    //       top: '50%',
    //       left: '50%',
    //       right: 'auto',
    //       bottom: 'auto',
    //       marginRight: '-50%',
    //       transform: 'translate(-50%, -50%)',
    //     },
    //   };
    //   const Navigate = useNavigate();
    //   function openModal() {
    //     setIsOpen(true);
    //   }
  
    //   function closeModal() {
    //     setIsOpen(false);
    //   }
    //   const SignIn = (event) =>{
    //     event.preventDefault();
    //     if (phoneNo === "" || phoneNo.length < 10) return;
  
    //     let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    //     auth.signInWithPhoneNumber(phoneNo, verify).then((result) => {
    //         setFinal(result);
    //         setIsOpen(true);
    //         alert("code sent")
    //         // setshow(true);
    //     })
    //         .catch((err) => {
    //             alert(err);
    //             window.location.reload()
    //         });
        
    //   };
    //   const ValidateOtp = () => {
    //     if (otp === null || final === null)
    //         return;
    //     final.confirm(otp).then((result) => {
    //         Navigate('/Dashboard');
    //         console.log(name,email,passwd,rePasswd);
    //     }).catch((err) => {
    //         alert("Wrong code");
    //     })
    // }
    console.log(name,email,passwd,rePasswd,phoneNo);
  
   return (
        <Grid>
            {/* <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Doc Modal"
            >
                <ModalBox>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PermPhoneMsgIcon /></Avatar>
                    <h2>Verify Your Number</h2>
                </Grid>
                <div id="recaptcha-container"></div>
                <TextField style={textStyle}label='UserOTP' placeholder='Enter OTP' fullWidth onChange={(event)=>setOtp(event.target.value)} required />
                <BtnWrap>
                    <Button variant='contained' type="submit" style={btnStyle} fullWidth onClick={ValidateOtp}>Verify</Button>
                    <Button variant='contained' type="submit" style={btnStyle} fullWidth onClick={closeModal}>Close</Button>
                </BtnWrap>
                </ModalBox>
            </Modal> */}
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PersonAddIcon /></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>Create an account</Typography>
                    <form>
                        <TextField fullWidth label='Name' placeholder='Enter Your Name' style={textStyle} onChange={(event)=>setName(event.target.value)} required/>
                        <TextField fullWidth label='Phone Number' placeholder='Enter Your Phone Number' style={textStyle} onChange={(event)=>setPhoneNo(event.target.value)} required/>
                        <TextField fullWidth label='Email' placeholder='Enter Your Email Id' style={textStyle} onChange={(event)=>setEmail(event.target.value)} required/>
                        <TextField fullWidth label='Password' placeholder='Enter Your Password' style={textStyle} onChange={(event)=>setPasswd(event.target.value)} required/>
                        <TextField fullWidth label='Confirm Password' placeholder='Re-Enter Your Password' style={textStyle} onChange={(event)=>setRePasswd(event.target.value)} required/>
                        <FormGroup style={formStyle}>
                    <FormControlLabel control={<Checkbox name='checked'/>} label="I accept to the terms and policies" fullWidth/>
                </FormGroup>
                <Typography style={typoStyle}>Aldready have an account?
                    <Link to='/login'>Sign In</Link>
                </Typography>
                        <Button type="submit" variant="contained" style={btnStyle} onClick={() => signIn()} fullWidth>Sign Up</Button>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    )
}
// const ModalBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `
// const BtnWrap = styled.div`
//   display: flex;
//   flex-direction: row;
// `
export default SignUp;