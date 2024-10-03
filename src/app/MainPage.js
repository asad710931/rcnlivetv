import {useState } from "react";
import Tvcard from "./component/Tvcard";
import {channelsDatas,channelsCategory} from './tvjson/channelList'
import NavBar from "./component/nav";
import MySlider from "./component/MySlider";
import NextPlyr from "./component/videoPlayer/nextPlyr";
import IFrame from "./component/videoPlayer/iframe";
export default function Page() {
    const [liveUrl,setLiveUrl]=useState('')
   
     console.log('url:'+liveUrl)
     return (
   
       <div className="entire-page">
   
       <NavBar onClick={()=>setLiveUrl('')}/>
       <main className="main-page">
           <div className="tv-channel-box">
              <div className="tv-view">
                 <div className="tv-screen">
                     {liveUrl==''?(<MySlider/>):(<div style={{width:'100%',height:'100%'}}>{liveUrl.includes('.m3u8')?<NextPlyr src={liveUrl}/>:<IFrame src={liveUrl}/>}</div>)
                   
                      /*
                       <iframe allowfullscreen="" width="100%" height="100%" src={liveUrl} 
                           frameborder="0" 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                           referrerPolicy="strict-origin-when-cross-origin" >
                       </iframe>*/
                     }
                       
                   </div>
              </div>
              
               
               <br/>
                 
                       <div className="channel-container">
                         {channelsCategory.map((chnl,indexCat)=>(          
                               <div key={indexCat}>
                                   <h1>{chnl.catname}</h1>
                                   <div className="tv-container">
                                   {channelsDatas.map((channel,indexChnl)=>{
                                       return chnl.catname.toLowerCase()==channel.category.toLowerCase()?  (<div><Tvcard  key={channel.id}
                                         title={channel.title} imgUrl={channel.logoUrl} onClick={()=>{setLiveUrl(channel.liveUrl);document.documentElement.scrollTop=0}} /></div>
                                         
                                       ):''
                                       
                                   })}
   
                                 </div>
                               </div> 
                               )       
   
                         )}
   
                       </div>
             </div>
       </main> 
        </div>
     );
   }