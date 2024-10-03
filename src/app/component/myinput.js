
import './styles/myinput.css'
 
const MyInput=({label=false,title='Button',onChange,value})=>{

   return(
       <div className='inputField'>
         {label==true?<label for="input">{title}</label>:''}<br/>
         <input type='text' onChange={onChange} placeholder={title} value={value}/><br/>
       </div>
   )
    

}

export default MyInput