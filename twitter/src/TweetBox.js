import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./Firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'rafeh kazi',
      username: 'cleverkazi',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://github.com/github.png?size=460",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox"> 
        <form>
            <div className="tweetBox__input">
             <Avatar src="https://github.com/github.png?size=460" />
             <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?"type="text" />
            </div>
            <input value={tweetMessage} onChange={(e) => setTweetImage(e.target.value)} className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" />
            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox