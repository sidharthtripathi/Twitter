import "./usertweet.css";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
export default function Tweet(props) {
  const { userimg, username, userid, msg, stats, imgs } = props.data;
  const [likeStatus, setLikeStatus] = useState(false);
  function handleLike() {
    likeStatus ? stats.likes-- : stats.likes++;
    setLikeStatus(likeStatus ? false : true);
  }
  return (
    <div className="tweet fade-in">
      <div className="userimg">
        <img src={userimg} alt="userdp" />
      </div>
      <div className="details">
        <div className="userinfo">
          <span id="username">{username}</span>
          <span id="userid">@{userid}</span>
        </div>
        <div className="tweetmsg">{msg}</div>
        <div className="action">
          <div className="action-item">
            <img src="chat.png" alt="commentIcon" />
            <span>{stats.comments}</span>
          </div>
          <div className="action-item">
            <img src="repost.png" alt="rtIcon" />
            <span>{stats.retweets}</span>
          </div>
          <div className="action-item">
            {likeStatus ? (
              <AiFillHeart
                className="likebtn"
                color="f91880"
                size="18"
                onClick={handleLike}
              />
            ) : (
              <AiOutlineHeart
                className="likebtn"
                onClick={handleLike}
                size="18"
              />
            )}
            <span>{stats.likes}</span>
          </div>
          <div className="action-item">
            <img src="stats.png" alt="inteIcon" />
            <span>{stats.interactions}</span>
          </div>
        </div>
        <Images imgs={imgs}></Images>
      </div>
    </div>
  );
}

function Images({ imgs }) {
  return (
    <div className="postimgs">
      {imgs.map((i) => {
        function handle(e) {
          e.target.style.display = "block";
          let loader = e.target.previousElementSibling;
          loader.style.display = "none";
        }
        return (
          <>
            <div className="post-img loader"></div>
            <img className="post-img" src={i} alt="" onLoad={handle} />
          </>
        );
      })}
    </div>
  );
}

import "./spinner.css";

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}

export { LoadingSpinner };
