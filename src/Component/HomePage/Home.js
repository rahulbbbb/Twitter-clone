import React from 'react'
import LeftSideBar from './LeftSideBar/LeftSideBar'
import CenterHeader from './CentreHeader/Center-Header';
import RightsideSection from './RightsideSection/RightSection';
import Tweets from '../Feeds/Tweets'


function Home() {
  return (
    <>
        <LeftSideBar/>
        <CenterHeader/>
        <RightsideSection/>
        <Tweets/>
    </>
  )
}

export default Home