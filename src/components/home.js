import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/action";
import { Button, Spinner } from "react-bootstrap";

const Home = () => {
    const [isLoading, setLoading] = useState(false);
    const homePosts = useSelector((store) => {
        return store.posts;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts({}, 1, 10));
    }, [dispatch]);
    // console.log(homePosts)

    const loadMorePosts = () => {
        setLoading(true)
        const newPage = homePosts.page + 1;
        dispatch(getPosts(homePosts, newPage, 10))
            .then(() => {
                setLoading(false)
            })
    };
    return (
        <>
            {isLoading ?
                <div style={{textAlign: 'center'}}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                : null}
            {!isLoading ?
                <Button onClick={loadMorePosts}>Load More</Button>

                : null}
        </>
    );
};

export default Home;
