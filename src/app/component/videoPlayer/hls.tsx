
import react,{ useEffect, useRef } from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';


interface videoProps{
   src:string
}
const VideoPlayer:react.FC<videoProps>=({src})=> {
  const videoRef = useRef<HTMLVideoElement|null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.controls = true;
    video.autoplay = true;
    const defaultOptions = {};
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // This will run in safari, where HLS is supported natively
      video.src = src;
    } else if (Hls.isSupported()) {
      // This will run in all other modern browsers

      const hls = new Hls();
      hls.loadSource(src);
      const player = new Plyr(video, defaultOptions);
      hls.attachMedia(video);
    } else {
      console.error(
        'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API'
      );
    }
  }, [src, videoRef]);

  return (
      <video style={{maxWidth:'100%'}}  ref={videoRef} />
  );
}
export default VideoPlayer;