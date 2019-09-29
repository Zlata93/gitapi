import '../styles/index.scss';
import store from './redux-app/store';
import TableView from './redux-app/views/TableView';
import InputView from './redux-app/views/InputView';

const tableWrapper = document.querySelector('.Table-Body');
const table = new TableView(tableWrapper, store);

const inputWrapper = document.querySelector('.Input-Wrapper');
const input = new InputView(inputWrapper, store);
