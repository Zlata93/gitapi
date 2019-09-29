import filterTypes from './filter.types';

const initState = {
    filter: ''
};

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case filterTypes.SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
};

export default filterReducer;