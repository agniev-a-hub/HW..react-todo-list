import React, {useState, useMemo} from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/mymodal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'TODO Item 1', body: 'TODO Content'},
    {id:2, title:'TODO Item 2', body: 'TODO Content'},
    {id:3, title:'TODO Item 3', body: 'TODO Content'},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const [modal, setModal] = useState(false)


  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    else {
      return posts;
    }
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

 
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={()=> setModal(true)}  >
        Add Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm create = {createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0px'}}/>
      <PostFilter
        filter = {filter}
        setFilter = {setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='TODO List'/>
    </div>
  );
}

export default App;


//130