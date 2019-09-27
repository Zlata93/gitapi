import Types from './Types';

export const initTableAction = (files) => ({
    type: Types.INIT_TABLE,
    payload: files
});

export const setFilterAction = (filter) => ({
    type: Types.SET_FILTER,
    payload: filter
});
