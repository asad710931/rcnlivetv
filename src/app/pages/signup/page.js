'use client'
import NavBar from "../../component/nav"
import '../../../app/globals.css'
import '../page.css'
import MyInput from "../../../app/component/myinput"
import { useState } from "react"
import Mybutton from "../../component/Mybutton"
const signup=()=>{
  //
  const [number,setNumber]=useState('')
  const [pass1,setPass1]=useState('')
  const [pass2,setPass2]=useState('')

  const [warn,setWarn]=useState('')

  const handleData=()=>{
    if(number==''|pass1==''|pass2==''){
      warning('You can\'t keep any field empty')
    }
    else if(pass1!==pass2){
      warning('!Password didn\'t matched')
    }else if(pass1.length<8){
      warning('!Password must be more than eight')
    }
    console.log(pass1.length)
  }
  const warning=(e)=>{
    setWarn(e)
  }
    return(
       
    <div>
         <NavBar/>
         <div className="main-page"><div className="page-container">

         </div>

           
           <div className="form-field">
             <h2 style={{fontSize:40,fontWeight:'bold',textAlign:'center',textShadow: '1px 2px 5px black'}}>Create Account</h2>
             <MyInput label={true} title={'Mobile Number'} value={number} onChange={(e)=>{setNumber(e.target.value);setWarn('')}}/>
             <MyInput label={true} title={'New Password'} value={pass1} onChange={(e)=>{setPass1(e.target.value);setWarn('')}}/>
             <MyInput label={true} title={'Confirm Password'} value={pass2} onChange={(e)=>{setPass2(e.target.value);setWarn('')}}/>
              <br />
             <Mybutton onClick={handleData} title="SIGN UP"/>
             <div className="warning">{warn}</div>
           </div>
         

         </div>

       
    </div>
  )

} 
export default signup