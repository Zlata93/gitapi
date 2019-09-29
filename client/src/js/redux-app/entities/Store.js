class Store {
    constructor(reducer, middlewares, initState) {
        this._state = initState;
        this._reducer = reducer;
        this._listeners = [];
        this._middlewares = middlewares;
        this.dispatch({});
    }

    // метод получения состояния
    getState() {
        return this._state;
    }

    // метод подписки на изменение данных
    subscribe(listener) {
        this._listeners.push(listener);

        // способ отписаться от изменения данных
        return () => {
            console.log(this._listeners);
            const index = this._listeners.indexOf(listener);
            this._listeners.splice(index, 1);
            console.log(this._listeners);
        }
    }

    // метод обновления данных
    dispatch(action) {
        this._middlewares.forEach(middleware => {
            middleware(this.dispatch.bind(this), this._state)(action);
        });
        this._state = this._reducer(this._state, action);
        this._notifySubscribers();
    }

    // оповещение всех подписчиков об изменении после обновления данных
    _notifySubscribers() {
        this._listeners.forEach(listener => {
            listener.preRender(this._state);
        })
    }
}

export default Store;
