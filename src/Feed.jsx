import posts from "./assets/posts";
import Post from "./Post";
export default function Feed() {
  const postContent = posts.map(({ username, content, timestamp, likes }) => (
    <Post
      username={username}
      contenttext={content}
      contenttimestamp={timestamp}
      contentlikes={likes}
    />
  ));
  return <div id="container">{postContent}</div>;
}
