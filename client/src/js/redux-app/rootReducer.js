import filesReducer from './files/files.reducers';
import filterReducer from './filter/filter.reducers';

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
