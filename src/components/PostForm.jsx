import React, { useState } from 'react';
import AkuButton from './UI/button/AkuButton';
import AkuInput from './UI/input/AkuInput';

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' })

    const addPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({ title: '', body: '' })
    }

    return (
        <form>
            <AkuInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type='text'
            />
            <AkuInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type='text'
            />
            <AkuButton onClick={addPost}>add new Post</AkuButton>
        </form>
    )
}

export default PostForm