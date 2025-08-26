import React from 'react'
import'./Login.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();

  const handlesign=()=>{
    navigate("/sign")
  }
  const handleHome = () =>{
    navigate("/home")
  }
  return (
    <div>
    <div className='full'>
    <div className='box'>
        <form >
            <div className='content'>
              <div className='head'>
            <h1 style={{fontSize:'40px' ,paddingBottom:'20px'}}>Welcome Back!</h1>
            <p style={{fontSize:'14px' ,paddingBottom:'20px',textAlign:'left'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Sustainable   agriculture is not just about growing crops,<br/> it's about caring for the soil, the water, the air, and all the living <br/>things that depend on them.</p>
            </div>
                <div className='in'>
                <label >User id  :  </label>
                
                <input placeholder='     User id' type='gmail'></input><AccountCircleTwoToneIcon/>
                <br/>
                <br/>
                <label>Password  :  </label>
                <input placeholder='      password'type='password'></input><VisibilityOffTwoToneIcon/>
                <br/>
                <br/>
                </div>
                <div className='pass'>
                <a href='https://youtu.be/RLzC55ai0eo?si=noc-2hVFlfVKUwUY' style={{fontSize:'14px', marginLeft:'70%'}}>Forget password?</a>
                </div>
                <br/>
                <br/>
              <div>
                <button onClick={handleHome}>Login</button>
              </div>
                <br/>
               <p>_________or continue with_________</p>
                <br/>
                <div className='socialmedia'>
                  <AppleIcon/>
                  <FacebookIcon/>
                  <GoogleIcon/>
                </div>
                <footer>
                  <p>Not  a  member? <span style={{color:'red',cursor:"pointer"}} onClick={handlesign}>Register now</span></p>
                </footer>


            </div>
        </form>
        <div className='imgage'>
            <img src= 'https://img.freepik.com/free-vector/hand-drawn-honey-jar-food-drawing-element_23-2150685492.jpg?t=st=1727173332~exp=1727176932~hmac=eab55fc6dea27224cefd1f8efbc2b818f3a2217d00425acce623e3b3d12ee4b4&w=740' style={{height:'80vh',left:'750px', top: '8px'}} alt='login'  ></img>
        </div>
    </div>
    </div>
</div>
  )
}

export default Login