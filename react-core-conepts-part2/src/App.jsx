import "./App.css";
import HandleClick3 from "./HandleClick3";
import Count from "./Count";
import Batsman from "./Batsman_UseState";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import Posts from "./Posts";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };
// wrap the data loading component under suspense

function App() {
  const postsPromise = fetchPosts();
  // const friendsPromise = fetchFriends();
  function HandleClick() {
    alert("Clicked me!");
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React + Kabbo</h1>
      <Suspense fallback={<h3>All Posts Loading ....</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
      {/* <Suspense fallback={<h3>All of My friends Coming For treat ....</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading ...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Batsman></Batsman>
      <Count></Count>
      <button onClick={HandleClick}>Click Me</button>
      <button onClick={HandleClick3}>Click Me 3</button>

      <button onClick={() => alert("Click 4 Clicked")}>Click Me 4</button>
      {/* Arrow Function wrapping */}
      <button onClick={() => handleAdd5(20)}>Click Add 5</button>
    </>
  );
}

export default App;
