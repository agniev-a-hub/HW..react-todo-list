import React, {useState} from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'TODO Item 1', body: 'TODO Content'},
    {id:2, title:'TODO Item 2', body: 'TODO Content'},
    {id:3, title:'TODO Item 3', body: 'TODO Content'},
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create = {createPost}/>
      <hr style={{margin: '15px 0px'}}/>
      <div>
        <MySelect
          value = {selectedSort}
          onChange = {sortPosts}
          defaultValue="SortBy"
          options={[
            {value:'title', name:'by name'},
            {value:'body', name:'by content'}
          ]}
        />
      </div>
      {posts.length
        ? <PostList remove={removePost} posts={posts} title='TODO List'/>
        : <div>No TODO items here, you are free to have a rest! :)</div>
      }
    </div>
  );
}

export default App;


//112