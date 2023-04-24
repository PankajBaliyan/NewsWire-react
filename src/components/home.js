import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/action";
import { Button, Spinner } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { LinkContainer } from "react-router-bootstrap";

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

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
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {homePosts.posts ?
                    homePosts.posts.map((item) => {
                        return (
                            <div className="mt-5" key={item.id}>
                                <img style={{ width: '100%', height: '200px' }} src="https://picsum.photos/1920/1080" alt="article images" />
                                <div className="author">Created by : John Deo</div>
                                <div className="content">
                                    <div className="title">{item.title}</div>
                                    <div className="excerpt">{item.body}</div>
                                    <LinkContainer to={`/posts/${item.id}`}>
                                        <Button variant="light" className="mt-3">Read More</Button>
                                    </LinkContainer>
                                </div>
                            </div>
                        )
                    })
                    : null}
            </Masonry>
            {isLoading ?
                <div className="mb-3" style={{ textAlign: 'center' }}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                : null}
            {!isLoading && !homePosts.isEnd ?
                <Button onClick={loadMorePosts} className="mb-3">Load More</Button>

                : null}
        </>
    );
};

export default Home;
