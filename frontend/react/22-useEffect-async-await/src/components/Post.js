import './Post.css';

function Post({ title, body, userId }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      <small>userId: {userId}</small>
    </div>
  );
}

export default Post;