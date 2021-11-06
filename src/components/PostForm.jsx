import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function PostForm({create}){

    // create-new-post, newPost variable set
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }

    const[post, setPost] = useState({title: '', body: ''})

    return(
        <form>
        <MyInput
          value = {post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="TODO Item Name"
        />
        <MyInput 
          value = {post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="TODO Item Content"
        />
        <MyButton onClick={addNewPost}>
          Create Post
        </MyButton>
      </form>
    )
}

export default PostForm;