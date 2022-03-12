import React from 'react';
import AkuButton from './UI/button/AkuButton';
import { useNavigate } from 'react-router-dom'


const PostItem = (props) => {
    const router = useNavigate()

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title || 'No Title'}</strong>
                <div>
                    {props.post.body || 'No Description'}
                </div>
            </div>
            <div className='post__btns'>
                <AkuButton onClick={() => router(`/posts/${props.post.id}`)}>Open</AkuButton>
                <AkuButton onClick={() => props.remove(props.post)}>Remove</AkuButton>
            </div>
        </div>
    )
}

export default PostItem