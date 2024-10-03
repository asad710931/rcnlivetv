
'use client'
import react,{} from 'react'
import Video from 'next-video';

interface videoSrc{
    src:string,
}
const NextPlyr:react.FC<videoSrc>=({src})=>{
  return(
   <Video 
       style={{width:'100%'}} src={src}
       controls autoPlay={true} 
       poster={'https://static.vecteezy.com/system/resources/thumbnails/028/259/336/original/live-streaming-logo-red-design-element-with-play-button-for-news-and-tv-or-online-broadcasting-motion-graphics-video.jpg'}
       />
  )
}

export default NextPlyr