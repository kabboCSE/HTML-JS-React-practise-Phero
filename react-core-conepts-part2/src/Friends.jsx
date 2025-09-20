import { use } from "react";
import "./App.css";
const Friends = ({ friendsPromise }) => {
  const friends = use(friendsPromise);
  return (
    <div className="borderd">
      <h3>Friends : {friends.length} </h3>
    </div>
  );
};

export default Friends;
