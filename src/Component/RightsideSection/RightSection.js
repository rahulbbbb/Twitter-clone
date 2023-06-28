import React, { useState } from "react";
import style from "./RightSection.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Typography from "@mui/material/Typography";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export default function RightsideSection () {
  const happeningData = [
    {
        title: "Trending in Sports",
        name: "#ViratKholi",
        tweets: "2500 Tweets",
        Names: "Jhon",
        email: "@jhon",
        isFollow: true,
        image:
          "https://www.ubetoo.com/wp-content/uploads/2020/04/Dumi-Mkokstad-in-support-of-conspiracy-theory-on-the-relation.jpg",
      },
    {
      title: "Trending in India",
      name: "#ShareMarket",
      tweets: "10.1k Tweets",
      Names: "Lora",
      email: "@lora",
      isFollow: true,
      image:
        "https://media.licdn.com/dms/image/D4E03AQElUX_252X3OQ/profile-displayphoto-shrink_800_800/0/1665254295747?e=2147483647&v=beta&t=AN6tZLLbfvjDJ4LfR1G2Bf_myIiEgXfnUiRc9DkoBsM",
    },
    {
        title: "Trending in India",
        name: "#SakshiMalik",
        tweets: "1000 Tweets",
        Names: "Mike ",
        email: "@mike_",
        isFollow: true,
        image:
          "https://media.licdn.com/dms/image/C4D03AQGbbiS8O7oSeA/profile-displayphoto-shrink_800_800/0/1616177201859?e=2147483647&v=beta&t=ae08hpJ3aBCObsnRj1VRiQVU7xzqJ_DUOJnhfEKRl44",
      },
    
    {
      title: "Trending in Politics",
      name: "#Modi",
      tweets: "10.2k Tweets",
      Names: "Ross",
      email: "@ross",
      isFollow: true,
      image:
        "https://i0.wp.com/wikibiostars.in/wp-content/uploads/2022/12/Dumi-Mkokstad.jpg",
    },
  ];

  const [follow1, setFollow] = useState(true);
  const [follow2, setFollow2] = useState(true);
  const [follow3, setFollow3] = useState(true);
  const [follow4, setFollow4] = useState(true);
  const [list, setList] = useState(happeningData)

  function handleClcik() {
    setFollow(!follow1);
  }

  function handleNotInterested(user){
     const deleted = list.filter(ele => user != ele)
     setList(deleted)
  }

  return (
    <div className={style.main_Div}>
      <div className={style.rightSroll}>
      <div className={style.fixe}>
        <div className={style.search_bar}>
          <SearchIcon />
          <input type="text" placeholder="Search twitter" />
        </div>
      </div>
      
        <div className={style.happen}>
          <div className={style.head}>
            <p>what's happening</p>
          </div>

          <div className={style.box}>
            {list.map((user, index) => {
              return (
                <div key={index} className={style.mapBox}>
                  <div>
                    <div className={style.title}>
                      <p>{user.title}</p>
                    </div>
                    <div className={style.name}>
                      <p>{user.name}</p>
                    </div>
                    <div className={style.tweets}>
                      <p>{user.tweets} </p>
                    </div>
                  </div>

                  <div className={style.more}>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                      {(popupState) => (
                        <div>
                          <div className={style.userData}
                            {...bindTrigger(popupState)}>
                            <Tooltip title="More">
                              <MoreHorizSharpIcon sx={{ fontSize: "15px" }} />
                            </Tooltip>
                          </div>

                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                            transformOrigin={{
                              vertical: "center",
                              horizontal: "right",
                            }}>
                            <Typography
                              sx={{
                                p: 1,
                                cursor: "pointer",
                                ":hover": { background: "#f5f4f2" },
                              }}>
                              <div className={style.popoverName} onClick={()=>handleNotInterested(user)}>
                                {" "}
                                <SentimentVeryDissatisfiedIcon
                                  sx={{ fontSize: "17px" }}
                                />{" "}
                                Not interested in this
                              </div>
                            </Typography>
                            <Typography
                              sx={{
                                p: 1,
                                cursor: "pointer",
                                ":hover": { background: "#f5f4f2" },
                              }}>
                              <div className={style.popoverName}>
                                {" "}
                                <SentimentVeryDissatisfiedIcon
                                  sx={{ fontSize: "17px" }}
                                />{" "}
                                This trend is harmful or spammy
                              </div>
                            </Typography>
                          </Popover>
                        </div>
                      )}
                    </PopupState>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={style.showmore}>
            <a>show more</a>
          </div>
        </div>

        <div className={style.follow}>
          <div className={style.toFollow}>
            <p>Who to follow </p>
          </div>
          <div className={style.Data}>
            <Data
              src={happeningData[0].image}
              name={happeningData[0].Names}
              email={happeningData[0].email}
              onClick={handleClcik}
              follow={follow1 ? "Follow" : "Unfollow"}/>
            <Data
              src={happeningData[1].image}
              name={happeningData[1].Names}
              email={happeningData[1].email}
              onClick={() => setFollow2(!follow2)}
              follow={follow2 ? "Follow" : "Unfollow"}/>
            <Data
              src={happeningData[2].image}
              name={happeningData[2].Names}
              email={happeningData[2].email}
              onClick={() => setFollow3(!follow3)}
              follow={follow3 ? "Follow" : "Unfollow"}/>
            <Data
              src={happeningData[3].image}
              name={happeningData[3].Names}
              email={happeningData[3].email}
              onClick={() => setFollow4(!follow4)}
              follow={follow4 ? "Follow" : "Unfollow"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

function Data({ src, name, email, onClick, follow }) {
  return (
    <div className={style.toFollowBox}>
      <div className={style.avtar}>
        <Avatar alt="name" src={src} />
      </div>
      <div className={style.followName}>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
      <div className={style.followBtn}>
        <button className={style.design} onClick={onClick}> {follow} </button>
      </div>
    </div>
  );
}