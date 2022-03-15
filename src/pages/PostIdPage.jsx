import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { useFetching } from '../hooks/useFetching'
import Loader from '../components/UI/Loader/Loader'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getByID(id)
        setPost(response.data)
    })

    const [fetchComments, isLoadingC, errorC] = useFetching(async (id) => {
        const response = await PostService.getCommentsByID(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])



    return (
        <div>
            { isLoading
                ? <Loader />
                : <div style={ { fontSize: 30 } }>
                    { post.id }. <strong >{ post.title }</strong>
                    <div style={ { fontSize: 20 } }
                    >{ post.body }
                    </div>
                </div>
            }
            <h1 style={ { borderBottom: '1px solid black' } }
            >
                Comments:
            </h1>
            { isLoadingC
                ? <Loader />
                : <div style={ { marginTop: 10 } }>
                    { comments.map(comm =>
                        <div key={ comm.id }>
                            <h5 style={ { marginTop: 10, borderBottom: '1px solid red' } }>{ comm.email }</h5>
                            <p>{ comm.body }</p>
                        </div>
                    ) }
                </div>
            }

        </div>
    )
}

export default PostIdPage