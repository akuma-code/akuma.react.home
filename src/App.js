import React, {useState} from 'react';

import PostForm from './components/PostForm'
import './styles/App.css';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {title: "TITLE #1", body: "BODY #1", id: 1},
    {title: "TITLE #2", body: "BODY #2", id: 2},
    {title: "TITLE #3", body: "BODY #3", id: 3},
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
