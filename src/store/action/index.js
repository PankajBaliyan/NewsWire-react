import axios from "axios"
const getPostsHelper = async (oldState,page,limit) => {
    const reqURL = 'https://jsonplaceholder.typicode.com/posts'
    const response = await axios.get(`${reqURL}?_limit=${limit}&_page=${page}`);
    // console.log(response)
    // return response.data;
    return ({
        posts: oldState.posts ? [...oldState.posts,...response.data] : response.data,
        page: page
    });
}
export const getPosts = (oldState={} ,page=1,limit=10) => {
    return ({
        type: 'get_posts',
        payload: getPostsHelper(oldState,page,limit)
    })
}