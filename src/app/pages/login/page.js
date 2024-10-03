'use client'
import NavBar from "../../component/nav"
import '../../../app/globals.css'
import '../page.css'
import MyInput from "../../../app/component/myinput"
import Mybutton from "../../../app/component/Mybutton"
import { useState } from "react"
const login=()=>{
  //
  const [number,setNumber]=useState('')
  const [pass1,setPass1]=useState('')

  const [warn,setWarn]=useState('')

  const handleData=()=>{
    if(number==''|pass1==''){
      warning('You can\'t keep any field empty')
    }
   else if(pass1.length<8){
      warning('Password can\'t be less than 6 digit')
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
             <h2 style={{fontSize:40,fontWeight:'bold',textAlign:'center',textShadow: '1px 2px 5px black'}}>Login</h2>
             <MyInput label={true} title={'Mobile Number'} value={number} onChange={(e)=>{setNumber(e.target.value);setWarn('')}}/>
             <MyInput label={true} title={'Password'} value={pass1} onChange={(e)=>{setPass1(e.target.value);setWarn('')}}/><br />
             <Mybutton onClick={handleData} title={'LOG IN'}/>
             <p style={{color:'red'}}>{warn}</p>
           </div>
         

         </div>

       
    </div>
  )

} 
export default login