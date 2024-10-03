 import './index.css'
 
 const Mybutton=({title='Button',onClick})=>{

    return(
        <button className="mybtn" onClick={onClick}>{title}</button>
    )
     

}

 export default Mybutton



