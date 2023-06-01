import React, { useState, useRef } from 'react';
import styles from './Header.module.css';
import {
  FaImage,
  FaSmile,
  FaPoll,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CenterHeader = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const fileInputRef = useRef(null);
  const [showScheduleBox, setShowScheduleBox] = useState(false);
 /*  const [tweetContent, setTweetContent] = useState('');
  const [submittedTweets, setSubmittedTweets] = useState([]); */

  const handleScheduleClick = () => {
    setShowScheduleBox(!showScheduleBox);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

 /*  const handleTweet = () => {
    setShowScheduleBox(false);
    if (tweetContent.trim() !== '') {
      setSubmittedTweets([...submittedTweets, tweetContent]);
      setTweetContent('');
    }
  };
 */
  return (
    <>
      <div className={styles.allitem}>
        <div className={styles.header}>
          <div className={styles.container}>
            <h2>Home</h2>
            <div className={styles.bottom}>
              <div className={styles.bottomleft}>
                <Link to="/" className={styles.btn1} style={{ textDecoration: 'none' }}>
                  For you
                </Link>
              </div>
              <div className={styles.bottomright}>
                <Link to="/" className={styles.btn2} style={{ textDecoration: 'none' }}>
                  Following
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.header2}>
          <div className={styles.container2}>

            <div className={styles.inputContainer}>
              <img src="./profilePic.png" alt="profile" />
              <input
                type="text"
                placeholder="What is happening?!"
                className={`${styles.inputBar} ${inputFocused ? styles.inputFocused : ''}`}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                /* onChange={(e) => setTweetContent(e.target.value)} */
              />
            </div>
            <div className={styles.container22}>
              <div className={styles.icons}>
                <div className={styles.subicons}>
                  <FaImage onClick={handleIconClick} className={styles.subicons1} />
                  <input type="file" style={{ display: 'none' }} ref={fileInputRef} />
                  <FaSmile className={styles.subicons1} />
                  <FaPoll className={styles.subicons1} />
                  <FaMapMarkerAlt className={styles.subicons1} />
                  <FaCalendarAlt onClick={handleScheduleClick} className={styles.subicons1} />
                  {showScheduleBox && (
                    <div className={styles.scheduleBox}>
                      <div className={styles.head} style={{ fontSize: '20px' }}>
                        <FaTimes
                          className={styles.closeButton}
                          onClick={handleScheduleClick}
                          style={{ color: 'gray', transition: 'color 0.3s' }}
                          onMouseOver={(e) => (e.target.style.color = 'black')}
                          onMouseOut={(e) => (e.target.style.color = 'gray')}
                        />
                        <h3 style={{ marginLeft: '50px' }}>Schedule</h3>
                        <button
                          className={styles.submitButton}
                          style={{
                            color: 'white',
                            backgroundColor: 'black',
                            height: '30px',
                            marginLeft: '250px',
                          }}
                        >
                          Confirm
                        </button>
                      </div>

                      <div className={styles.scheduleContent}>
                        <div className={styles.dateContainer}>
                          <label>Date:</label>
                          <div className={styles.dateInputContainer}>
                            <input type="text" placeholder="MM" maxLength="2" />
                            <input type="text" placeholder="DD" maxLength="2" />
                            <input type="text" placeholder="YYYY" maxLength="4" />
                          </div>
                        </div>

                        <div className={styles.timeContainer}>
                          <label>Time:</label>
                          <div className={styles.timeInputContainer}>
                            <input type="text" placeholder="HH" maxLength="2" />
                            <input type="text" placeholder="MM" maxLength="2" />
                            <select>
                              <option value="AM">AM</option>
                              <option value="PM">PM</option>
                            </select>
                          </div>
                        </div>

                        <label>Timezone:</label>
                        <select>
                          <option value="timezone1">(IST) India Standard Time</option>
                          <option value="timezone2">(PST) Pacific Standard Time</option>
                          <option value="timezone2">(CET) Central European Time</option>
                          <option value="timezone2">UTC +2</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className={`${styles.button1} ${inputFocused ? '' : styles.buttonFade}`}>
                <button /* onClick={handleTweet} */>Tweet</button>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>

      {/* <div className={styles.submittedTweetsContainer}>
            {submittedTweets.map((tweet, index) => (
            <div key={index} className={styles.submittedTweet}>
              {tweet}
            </div>
              ))}
             </div> */}
      
    </>
  );
};

export default CenterHeader;





