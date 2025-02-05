import { useState, useEffect } from 'react';
import Post from './Post';

export default function Posts() {
  // const [data, setData] = useState({ posts: [] });
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(POSTS_URL)
      .then((response) => response.json())
      // .then((json) => setData({ ...data, posts: json }))
      .then((json) => setPosts(json))
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  }, []);
  // return (
  //   <div>
  //     <h1>Posts</h1>
  //     {(data.posts &&
  //       data.posts.map((post) => <Post key={post.id} {...post} />)) || (
  //       <p>No posts found</p>
  //     )}
  //   </div>
  // );
  // if (error){
  //   return <>Error: {error.message}</>
  // }
  // if (isLoading) {
  //   return <h1>is loading...</h1>
  // }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>is loading...</h1>
      ) : (
        (posts.length > 0 &&
          !isLoading &&
          posts.map((post) => <Post key={post.id} {...post} />)) ||
        (!isLoading && <p>{error.message}</p>)
      )}
    </>
  );
}
