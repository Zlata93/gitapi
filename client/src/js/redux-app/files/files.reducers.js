import fileTypes from "./files.types";

const initState = {
    files: [],
    isFetching: false,
    error: ''
};

const filesReducer = (state = initState, action) => {
    switch (action.type) {
        case fileTypes.FETCH_FILES_START:
            return {
                ...state,
                isFetching: true
            };
        case fileTypes.FETCH_FILES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                files: action.payload.output
            };
        case fileTypes.FETCH_FILES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default filesReducer;