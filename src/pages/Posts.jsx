import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm'
import PostList from '../components/PostList';
import AkuButton from '../components/UI/button/AkuButton';
import Loader from '../components/UI/Loader/Loader';
import AkuModal from '../components/UI/Modal/AkuModal';
import Pagination from '../components/UI/pagination/Pagination';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import '../styles/App.css';
import { getPageCount, getPagesArray } from '../utils/pages';

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)






    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit = 10, page = 1) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })




    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page)

    }



    return (
        <div className="App">
            <div style={ { display: 'flex', flexDirection: 'row', marginTop: 15 } }>
                <AkuButton onClick={ fetchPosts }>GET POSTS</AkuButton>
                <AkuButton onClick={ () => setModal(true) }>
                    ADD NEW POST
                </AkuButton>
            </div>


            <AkuModal visible={ modal } setVisible={ setModal }>

                <PostForm create={ createPost } />
            </AkuModal>

            <hr style={ { margin: '15px 0' } }></hr>


            <PostFilter
                filter={ filter }
                setFilter={ setFilter }
            />

            <Pagination
                totalPages={ totalPages }
                page={ page }
                changePage={ changePage }
            />
            {/* { postError &&
                <h1>ERROR!!</h1> } */}





            { isPostLoading
                ? <div style={ { display: 'flex', justifyContent: 'center', marginTop: 50 } }><Loader /></div>
                : <PostList posts={ sortedAndSearchedPost } title='СПИСОК ПОСТОВ' remove={ removePost } />
            }

        </div>
    );
}






export default Posts