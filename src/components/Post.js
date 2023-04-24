import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { clearPostById, getPostById } from '../store/action';

const Post = () => {
    const { id } = useParams()
    const postById = useSelector((store) => {
        return store.posts.postById;
    });
    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(getPostById(id))
        },
        [dispatch, id]
    )
    useEffect(
        () => {
            return () => {
                dispatch(clearPostById())
            }
        },
        [dispatch]
    )
    return (
        <div>
            {postById ?
                <div className="my-5 article_container">
                    <h1>{postById.title}</h1>
                    <div className='image' style={{ background: `url(https://picsum.photos/1920/1080)` }}></div>
                    <div className="author">
                        <span>Created By : John Deo</span>
                    </div>
                    <div className='mt-3 content'>{postById.body}</div>
                </div>
                : null}
        </div>
    )
}

export default Post