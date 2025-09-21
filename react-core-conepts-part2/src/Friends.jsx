import { use } from "react";
import "./App.css";
import Friend from "./Friend";
const Friends = ({ friendsPromise }) => {
  const friends = use(friendsPromise);
  // console.log("newFriend", friends);
  return (
    <div className="borderd">
      {/* <h3>Friends : {friends.length} </h3> */}
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
