import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import CenterHeader from "./CentreHeader/Center-Header";
import RightsideSection from "../RightsideSection/RightSection";
import Tweets from "../Feeds/Tweets";
import { TweetsData } from "../Feeds/feedsApi";

function Home() {
  const [tweets, setTweets] = useState(TweetsData);

  const addTweet = (data) => {
    const updatedTweets = [{ ...data }, ...tweets];
    setTweets(updatedTweets);
  };

  return (
    <>
      <LeftSideBar />
      
        <CenterHeader addTweet={addTweet} />
       
        <Tweets tweets={tweets} />
      
      <RightsideSection />
    </>
  );
}

export default Home;
