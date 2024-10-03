import { FaAlignJustify } from "react-icons/fa";
import { BsList,BsXLg,BsHouse,BsFillHouseFill,BsInfoCircle,BsGear,BsBoxArrowInRight,BsPersonAdd,BsPersonCircle} from "react-icons/bs";
import Link from "next/link";
import logo from '../../../public/iconrcn1.png';
import Image from "next/image";
import signup from "../pages/signup/page";
import './index.css'
import MyLogo from "./logo";


const NavBar=({onClick,signup='',login='',about})=>{


    const handleSidebar=()=>{
       let sidebar=document.querySelector('.sidebar')
       if(sidebar.offsetWidth=='0'){
         sidebar.style.width='300px'
       }else{
        sidebar.style.width='0px'
       }
    }

 return(
    <div>
     <div className="navbar-box">
        <button className="manu-btn" onClick={handleSidebar}>
           <BsList color="white" size={25}/>
        </button>
        <Link href="../"><MyLogo/> </Link> 
        <h2 style={{fontSize:18}}>TV Networks</h2>
     </div>



     <div className="sidebar"> 
       <div className="close-box">
         <button onClick={handleSidebar}>
           <BsXLg color="white" size={25}/>
         </button>
       </div>
       <div className="nav-natigate">
           <div class="user-info">
          
              <div className="user-profile">
               <BsPersonCircle color="white" size={70}/>
              </div>
              <div><h3>Guest</h3></div>
           </div>
           <div className="nav-header">
               
                  <div onClick={onClick} class="btn-links">< BsHouse color="white" size={25}/><p style={{margin:"0px 15px"}}><Link href="../">Home</Link></p></div>
                  <div onClick={onClick} class="btn-links">< BsBoxArrowInRight color="white" size={25}/><p style={{margin:"0px 15px"}}><Link href="../pages/login">LogIn</Link></p></div>
                  <div onClick={onClick} class="btn-links">< BsPersonAdd color="white" size={25}/><p style={{margin:"0px 15px"}}><Link href="../pages/signup">Create Account</Link></p></div>
                  <div onClick={onClick} class="btn-links">< BsGear  color="white" size={25}/><p style={{margin:"0px 15px"}}><Link href="../pages/setting">Settings</Link></p></div>
                  <div onClick={onClick} class="btn-links">< BsInfoCircle color="white" size={25}/><p style={{margin:"0px 15px"}}><Link href="../pages/about">About Us</Link></p></div><br/>

                  <p style={{color:'white'}}>RCN Live TV Networks</p>
            </div>
       </div>

    </div>
    </div>
 )
}
export default NavBar