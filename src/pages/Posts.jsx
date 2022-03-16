import React, { useEffect, useRef, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm'
import PostList from '../components/PostList';
import AkuButton from '../components/UI/button/AkuButton';
import Loader from '../components/UI/Loader/Loader';
import AkuModal from '../components/UI/Modal/AkuModal';
import Pagination from '../components/UI/pagination/Pagination';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from "../hooks/useObserver";
import { usePosts } from '../hooks/usePosts';
import '../styles/App.css';
import { getPageCount } from '../utils/pages';

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()
    // const observer = useRef()





    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit = 10, page = 1) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })




    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }



    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page)

    }
    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        setPage(page + 1)
    })

    return (
        <div className="App">
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                <AkuButton onClick={() => fetchPosts(limit, page)}>GET POSTS</AkuButton>
                <AkuButton onClick={() => setModal(true)}>ADD NEW POST</AkuButton>
            </div>


            <AkuModal visible={modal} setVisible={setModal}>

                <PostForm create={createPost} />
            </AkuModal>

            <hr style={{ margin: '15px 0' }}></hr>


            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />


            {postError &&
                <h1>ERROR!!</h1>}
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />

            <PostList posts={sortedAndSearchedPost} title='СПИСОК ПОСТОВ' remove={removePost} />
            <div ref={lastElement} style={{ height: 20, background: 'red' }} />
            {isPostLoading &&
                <div
                    style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
                >
                    <Loader />
                </div>
            }

        </div>
    );
}






export default Posts