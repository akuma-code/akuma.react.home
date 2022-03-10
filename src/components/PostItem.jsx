import React from 'react';
import AkuButton from './UI/button/AkuButton';


const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}. {props.post.title || 'No Title'}</strong>
                <div>
                    {props.post.body || 'No Description'}
                </div>
            </div>
            <div className='post__btns'>
                <AkuButton onClick={() => props.remove(props.post)}>Remove</AkuButton>
            </div>
        </div>
    )
}

export default PostItem