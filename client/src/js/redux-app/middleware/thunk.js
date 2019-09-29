function thunk(dispatch, state) {
    return (action) => {
        if (typeof action === 'function') {
            return action(dispatch, state);
        }
        return action;
    }
}

export default thunk;