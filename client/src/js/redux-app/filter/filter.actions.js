import filterTypes from './filter.types';

export const setFilterAction = (filter) => ({
    type: filterTypes.SET_FILTER,
    payload: filter
});