import reducer from './rootReducer';
import Store from './entities/Store';
import thunk from "./middleware/thunk";

const store = new Store(reducer, [thunk]);

export default store;