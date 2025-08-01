import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Blog Posts</h2>
      <input
        type="text"
        placeholder="Search posts by title"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <strong>{post.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
