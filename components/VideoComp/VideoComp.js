import styles from './style.module.scss'
import ReactPlayer from 'react-player'
import { useCallback, useState } from 'react';

const VideoComp = () => {
  const [playIndex, setPlayIndex] = useState(0);
  const playList = [
    {index:1, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},
    {index:2, url: 'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8'},
    {index:3, url: 'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8'}
  ];
  const handleNextVideo = useCallback((video, playIndex) => {
    if(playIndex === video.length - 1) {
      setPlayIndex(0)
    } else {
      setPlayIndex(playIndex + 1)
    }
  }, [playIndex])

  return (
    <>
      <div className={styles.video_wrapper}>
        <ReactPlayer
          url={playList[playIndex].url}
          width='800px'
          height='500px'
          playing={true}
          muted={true}
          controls={true}
          light={false}
          pip={true}
          onEnded={() => { handleNextVideo(playList, playIndex)}}
          >

        </ReactPlayer>
      </div>
    </>
  )
}

export default VideoComp