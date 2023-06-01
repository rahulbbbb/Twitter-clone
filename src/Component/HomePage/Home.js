import React from 'react'
import LeftSideBar from './LeftSideBar/LeftSideBar'
import CenterHeader from './CentreHeader/Center-Header';
import RightSection from '../RightsideSection/RightSection'


function Home() {
  return (
    <>
        <LeftSideBar/>
        <CenterHeader/>
        <RightSection/>
    </>
  )
}

export default Home