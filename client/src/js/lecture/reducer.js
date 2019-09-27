import Types from "./types";

const reducer = (state, action) => {
    switch (action.type) {
        case Types.SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        case Types.INIT:
        default:
            return {
                name: '',
                files: [
                    {
                        name: 'api'
                    },
                    {
                        name: 'ci'
                    },
                    {
                        name: 'doc'
                    },
                    {
                        name: 'client'
                    },
                    {
                        name: 'server'
                    },
                    {
                        name: 'tests'
                    },
                    {
                        name: 'util'
                    },
                ]
            }
    }
};

export default reducer;
