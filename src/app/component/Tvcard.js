import Image from "next/image";

const Tvcard=({onClick,imgUrl='',title})=>{

    return(
        <div className="tv-card" onClick={onClick}>
            <img className="tv-logo" src={imgUrl}/>
            
       </div>
    )

}
export default Tvcard