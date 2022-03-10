import React, { useState } from 'react';

import PostForm from './components/PostForm'
import './styles/App.css';
import PostList from './components/PostList';

function App () {
  const [posts, setPosts] = useState([
    // { title: "123", body: "123" }
  ])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title='AppPosts' remove={removePost} />
    </div>
  );
}

export default App;
