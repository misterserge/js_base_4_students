import { useState, useEffect } from 'react';
import Post from './Post';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(POSTS_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // useEffect(() => {
  //   fetch(POSTS_URL)
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json))
  //     .catch((error) => setError(error))
  //     .finally(() => setIsLoading(false));
  // }, []);

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
