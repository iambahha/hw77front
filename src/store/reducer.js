import {
    FETCH_COMMENTS_FAILURE,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    PUBLISH_COMMENT_FAILURE,
    PUBLISH_COMMENT_REQUEST,
    PUBLISH_COMMENT_SUCCESS
} from "./actions";

const initialState = {
    comments: [],
    loading: false,
    error: null
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
        case PUBLISH_COMMENT_REQUEST:
            return {...state, loading: true};
        case FETCH_COMMENTS_SUCCESS:
            return {...state, comments: action.comments};
        case PUBLISH_COMMENT_SUCCESS:
            const comments = [...state.comments];
            comments.push(action.comment);
            return {...state,
                comments,
                loading: false
            };
        case FETCH_COMMENTS_FAILURE:
        case PUBLISH_COMMENT_FAILURE:
            return {...state, loading: false, error: action.error};

        default:
            return state;
    }
};

export default reducer;