import Types from './Types';

export const initTableAction = (files) => ({
    type: Types.INIT_TABLE,
    payload: files
});

export const setFilterAction = (filter) => ({
    type: Types.SET_FILTER,
    payload: filter
});

export const fetchFilesSuccess = (files) => {
    return {
    type: Types.FETCH_FILES_SUCCESS,
    payload: files
}};

export const fetchFilesFailure = (error) => ({
    type: Types.FETCH_FILES_FAILURE,
    payload: error
});

// export const fetchFilesStart = () => ({
//     type: Types.FETCH_FILES_START,
// });

export const fetchFilesStart = () => {
    return (dispatch, state) => {
        // dispatch(fetchFilesStart());
        // debugger;
        const files = fetch('http://localhost:5000/api/repos/react/')
            .then(res => res.json())
            .then(res => dispatch(fetchFilesSuccess(res)))
            .catch(error => dispatch(fetchFilesFailure(error)));
    }
};