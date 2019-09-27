import '../styles/index.scss';

import Store from './store';
import InputView from "./views/InputView";
import TableView from "./views/TableView";
import reducer from "./reducer";

console.log('Hi!');

const store = new Store(reducer);

const inputWrapper = document.querySelector('.Input-Wrapper');
new InputView(inputWrapper, store);

// const files = document.querySelectorAll('.File');
// console.log('Files: ', files[0].lastChild.textContent.trim());
// files.forEach(file => console.log(file.lastChild.textContent.trim()));

const tableWrapper = document.querySelector('.Table-Body');
new TableView(tableWrapper, store);

