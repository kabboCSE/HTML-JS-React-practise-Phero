import { use } from "react";
import Post from "./Post";

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);
  console.log(Posts);
  return (
    <div>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
};
export default Posts;
