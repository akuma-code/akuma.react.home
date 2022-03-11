import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm'
import PostList from './components/PostList';
import AkuButton from './components/UI/button/AkuButton';
import AkuModal from './components/UI/Modal/AkuModal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    // { title: "a 123", body: "3234 BODY #1", id: 1 },
    // { title: "b 345", body: "2222 BODY #2", id: 2 },
    // { title: "c 678", body: "1111 BODY #3", id: 3 },
  ])

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)






  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>

        <AkuButton onClick={fetchPosts}>GET POSTS</AkuButton>
        <AkuButton onClick={() => setModal(true)}>
          ADD NEW POST
        </AkuButton>
      </div>
      <AkuModal visible={modal} setVisible={setModal}>

        <PostForm create={createPost} />
      </AkuModal>
      <hr style={{ margin: '15px 0' }}></hr>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList posts={sortedAndSearchedPost} title='СПИСОК ПОСТОВ' remove={removePost} />
    </div>
  );
}

export default App;
