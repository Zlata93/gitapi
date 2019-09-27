class View {
    constructor(el, store) {
        this._store = store;
        this._el = el;
        // отслеживание изменений в Store
        this._unsubscribe = store.subscribe(this);
        console.log(store.getState())
        this.preRender(store.getState());
    }

    preRender(state) {
        this._el.innerHTML = this.render(state);
    }

    // метод render
    render() {
        throw new Error('This method should be overriden');
    }

    // формирование и отправка action в Store
    dispatch(action) {
        this._store.dispatch(action);
    }

    destroy() {
        this._el.innerHTML = '';
        this._unsubscribe();
    }
}

export default View;
