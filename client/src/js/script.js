import '../styles/index.scss';

console.log('Hi!');

function thunk(dispatch, state) {
    return (action) => {
        if (typeof action === 'function') {
            // debugger
            return action(dispatch, state);
        }
        return action;
    }
}

import reducer from "./redux-app/Reducer";
import Store from './redux-app/Store';
import TableView from "./redux-app/views/TableView";
import FilterView from "./redux-app/views/FilterView";

const store = new Store(reducer, [thunk]);

const tableWrapper = document.querySelector('.Table-Body');
new TableView(tableWrapper, store);

const inputWrapper = document.querySelector('.Input-Wrapper');
new FilterView(inputWrapper, store);

// const files = fetch('http://localhost:5000/api/repos/deti/tree/develop/reusable')
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.log('!!!', err));

// commit my implementation
// write applyMiddleware
// write thunk
