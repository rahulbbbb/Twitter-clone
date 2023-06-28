import React, {useState} from 'react';
//import { TweetsData } from './feedsApi'; 
import { FaRetweet } from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {BiBarChart} from 'react-icons/bi'
import {MdOutlineFileUpload} from 'react-icons/md'
import styles from './Tweets.module.css' 

const Tweet = ({ tweet }) => {
    const [likes, setLikes] = useState(tweet.likeCount);
   const [retweets, setRetweets] = useState(tweet.reTweetsCount);
   const [views, setViews] = useState(tweet.likeCount);
   const [comments, setComments] = useState(tweet.commentCount);

   const handleLikeClick = () => {
    if (!tweet.isLiked) {
      setLikes(likes + 1);
    } else {
        setLikes(likes === 0 ? 0 : likes - 1);
    }
    tweet.isLiked = !tweet.isLiked; 
  };

  const handleRetweetClick = () => {
    setRetweets(retweets + 1);
  };

  return (
    <div className={styles.tweet}>
 {
  tweet &&tweet.tweetedBy && tweet.tweetedBy.name === "Rahul Bankoti" ? (
    <>
      <div className={styles.tweetheader}>
        <img src={tweet.image} alt="User Avatar" className={styles.avatar1} />
        <div className={styles.tweetinfo}>
          <h3 className={styles.tweetuser}>{tweet.tweetedBy.name}</h3>
          <p className={styles.tweettime}>{tweet.createdAt}</p>
        </div>
      </div>
     
      <p className={styles.tweetcontent}>{tweet.content}</p>
    </>
  ) : (
    <>
      <div className={styles.tweetheader}>
        <img src={tweet.image} alt="User Avatar" className={styles.avatar1} />
        <div className={styles.tweetinfo}>
          <h3 className={styles.tweetuser}>{tweet.tweetedBy.name}</h3>
          <p className={styles.tweettime}>{tweet.createdAt}</p>
        </div>
      </div>
      <img src={tweet.image} alt="User Avatar" className={styles.avatar2} />

      <p className={styles.tweetcontent}>{tweet.content}</p>
    </>
  )
}

      <div className={styles.tweetbuttons}>

        <div className={styles.tweetbuttonC} title="Reply"><FaRegComment /> {comments}</div>
        <div className={styles.tweetbuttonR} onClick={handleRetweetClick} title="Retweet"><FaRetweet /> {retweets}</div>
        <div className={styles.tweetbuttonH} onClick={handleLikeClick} title="Like" ><AiOutlineHeart/> {likes}</div>
        <div className={styles.tweetbuttonE} title="View"><BiBarChart/> {views}</div>
       <div className={styles.tweetbuttonD} title="Share" ><MdOutlineFileUpload/></div>
       

      </div>
    </div>
  );
};

const Tweets = ({tweets}) => {
  return (
    <div  className={styles.Tcontainer}>
    <div className={styles.tweetscontainer}>
      {tweets && 
      tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
    </div>
  );
};

export default Tweets;
