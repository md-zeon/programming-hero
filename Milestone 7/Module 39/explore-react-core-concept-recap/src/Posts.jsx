import React, { useEffect, useState } from 'react'
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
  }, [])
  return (
    <div className="">
        <h2>Posts: {posts.length}</h2>
        {
          posts.map(post => <Post post = {post}></Post>)
        }
    </div>
  )
}

export default Posts;