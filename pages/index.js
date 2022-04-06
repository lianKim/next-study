import React from 'react'
import AppLayout from '../components/AppLayout'
import VideoComp from '../components/VideoComp/VideoComp'
import ReactPlayer from 'react-player'

const Home = () => {
  return(
    <AppLayout>
      <div>Hello</div>
      <VideoComp></VideoComp>
    </AppLayout>
  )
}

export default Home