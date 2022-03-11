import React, {useMemo, useState} from 'react';
import PostForm from './components/PostForm'
import PostList from './components/PostList';
import AkuInput from './components/UI/input/AkuInput';
import AkuSelect from './components/UI/select/AkuSelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {title: "aTITLE #1", body: "3 BODY #1", id: 1},
    {title: "bTITLE #2", body: "2 BODY #2", id: 2},
    {title: "cTITLE #3", body: "1 BODY #3", id: 3},
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSort, setSelectedSort] = useState('')


  function getSortedPosts() {
    console.log('SORTING!');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortedPosts = useMemo(() => {

    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter(
      post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts]);


  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}></hr>
      <div>
        <AkuInput

          placeholder='Search Title'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}

        />
        <AkuSelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="sort as"
          options={[
            {value: 'title', name: 'as title'},
            {value: 'body', name: 'as description'},
          ]}

        />
      </div>
      <PostList posts={sortedAndSearchedPost} title='AppPosts' remove={removePost} />
    </div>
  );
}

export default App;
