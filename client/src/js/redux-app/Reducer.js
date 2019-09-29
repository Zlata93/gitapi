import Types from "./Types";

const filesReducer = (state = { files: [], error: '' }, action) => {
    switch (action.type) {
        case Types.INIT_TABLE:
            return {
                ...state,
                files: action.payload
            };
        case Types.FETCH_FILES_SUCCESS:
            return {
                ...state,
                files: action.payload.output
            };
        case Types.FETCH_FILES_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

const filterReducer = (state = { filter: '' }, action) => {
    switch (action.type) {
        case Types.SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
};

function combineReducers(reducers) {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((newState, key) => {
            newState[key] = reducers[key](state[key], action);
            return newState;
        }, {});
    }
}

const rootReducer = combineReducers({
    files: filesReducer,
    filter: filterReducer
});

export default rootReducer;
