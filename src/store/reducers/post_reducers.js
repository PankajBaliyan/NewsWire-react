export default function PostReducer(state = {}, action) {
    switch (action.type) {
        case 'get_posts':
            // return { ...state, posts: action.payload };
            return { ...state, ...action.payload };
        default:
            return state;
    }
}