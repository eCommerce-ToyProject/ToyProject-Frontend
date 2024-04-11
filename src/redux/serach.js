export const SEARCH = 'SEARCH';

export const search = (searchVal) => ({
    type: SEARCH,
    payload: searchVal,
});