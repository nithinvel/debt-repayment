import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import'./Sign.css'
import { useNavigate } from 'react-router-dom';
const Sign = () => {
  const navigate=useNavigate();

  const handlelogin=()=>{
    navigate("/")
  }
  return (
    <div>
      <h1>signup-------</h1>
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
                <label> E-mail  :  </label>
                <input placeholder='      password'type='password'></input>
                <br/>
                <br/>
                <label>Set Password    :        </label>
                <input placeholder='      password'type='password'></input><VisibilityOffTwoToneIcon/>
                <br/>
                <br/>
                <label>Confirm Password  :  </label>
                <input placeholder='      password'type='password'></input><VisibilityOffTwoToneIcon/>
                <br/>
                <br/>
                </div>
                
                <br/>
                <br/>
              
                <br/>
               <p>_________or continue with_________</p>
                <br/>
                <div className='socialmedia'>
                  <AppleIcon/>
                  <FacebookIcon/>
                  <GoogleIcon/>
                </div>
                <footer>
                  <p>Already a Member?  <span style={{color:'red',cursor:'pointer'}} onClick={handlelogin}> Login now</span></p>
                </footer>


            </div>
        </form>
        <div className='imgage'>
            <img src= 'https://img.freepik.com/free-vector/hand-drawn-honey-jar-food-drawing-element_23-2150685492.jpg?t=st=1727173332~exp=1727176932~hmac=eab55fc6dea27224cefd1f8efbc2b818f3a2217d00425acce623e3b3d12ee4b4&w=740' alt='login'style={{height:'80vh',left:'750px', top: '10px'}} ></img>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Sign