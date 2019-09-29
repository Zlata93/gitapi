import fileTypes from './files.types';

export const fetchFilesSuccess = (files) => {
    return {
        type: fileTypes.FETCH_FILES_SUCCESS,
        payload: files
    }};

export const fetchFilesFailure = (error) => ({
    type: fileTypes.FETCH_FILES_FAILURE,
    payload: error
});

export const fetchFilesStart = () => ({
    type: fileTypes.FETCH_FILES_START,
});

export const fetchFilesStartAsync = () => {
    return (dispatch, state) => {
        dispatch(fetchFilesStart());
        fetch('http://localhost:5000/api/repos/react/')
            .then(res => res.json())
            .then(res => dispatch(fetchFilesSuccess(res)))
            .catch(error => dispatch(fetchFilesFailure(error)));
    }
};