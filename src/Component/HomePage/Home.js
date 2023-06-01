import React from 'react'
import LeftSideBar from './LeftSideBar/LeftSideBar'
import CenterHeader from './CentreHeader/Center-Header';
import RightsideSection from '../RightsideSection/RightSection';


function Home() {
  return (
    <>
        <LeftSideBar/>
        <CenterHeader/>
        <RightsideSection/>
    </>
  )
}

export default Home