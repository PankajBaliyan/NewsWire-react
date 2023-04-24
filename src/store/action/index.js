import axios from "axios"
const getPostsHelper = async (oldState, page, limit) => {
    const reqURL = 'https://jsonplaceholder.typicode.com/posts'
    const response = await axios.get(`${reqURL}?_limit=${limit}&_page=${page}`);
    // console.log(response)
    // return response.data;
    return ({
        posts: oldState.posts ? [...oldState.posts, ...response.data] : response.data,
        page: page,
        isEnd: response.data.length === 0 ? true : false
    });
}
export const getPosts = (oldState = {}, page = 1, limit = 10) => {
    return ({
        type: 'get_posts',
        payload: getPostsHelper(oldState, page, limit)
    })
}

const getPostByIdHelper = async (id) => {
    const reqURL = 'https://jsonplaceholder.typicode.com/posts'
    const response = await axios.get(`${reqURL}/${id}`);
    return response.data
}

export const getPostById = (id = 1) => {
    return ({
        type: 'get_post_by_id',
        payload: getPostByIdHelper(id)
    })
}

const clearPostByIdHelper = () => {
    return {}
}

export const clearPostById = () => {
    return (
        {
            type: 'clear_post_by_id',
            payload: clearPostByIdHelper()
        }
    )
}