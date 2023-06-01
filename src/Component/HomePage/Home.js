import React from 'react'
import LeftSideBar from './LeftSideBar/LeftSideBar'
import CenterHeader from '../../Center-Header'
import Tweets from '../Feeds/Tweets'


function Home() {
  return (
    <>
        <LeftSideBar/>
        <CenterHeader/>
        <Tweets/>
    </>
  )
}

export default Home