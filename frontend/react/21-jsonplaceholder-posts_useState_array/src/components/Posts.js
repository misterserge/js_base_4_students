import { useState, useEffect, use } from 'react';
import Post from './Post';

export default function Posts() {
  const [data, setData] = useState({ posts: [], isLoading: true, error: '' });
  const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(POSTS_URL)
      .then((response) => response.json())
      .then((json) => setData({ ...data, posts: json }))
      .catch((error) => setData((json) => ({ ...json, error })))
      .finally(() => setData((prev) => ({ ...prev, isLoading: false })));
  }, []);

  const { posts, isLoading, error } = data;
  console.log(data);

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
