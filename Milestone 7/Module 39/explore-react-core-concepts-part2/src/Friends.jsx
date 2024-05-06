import React, { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";

function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="box">
      <h3>Friends: {friends.length}</h3>
      {friends.map((friend) => {
        return <Friend friend={friend}></Friend>;
      })}
    </div>
  );
}

export default Friends;
