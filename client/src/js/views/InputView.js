import View from "../view";
import { setNameAction } from "../actions";

class InputView extends View {
    constructor(el, store) {
        super(el, store);
        this._onInput = this._onInput.bind(this);
        this._el.addEventListener('change', this._onInput);
    }

    _onInput(event) {
        this._store.dispatch(setNameAction(event.target.value));
    }

    render({ name }) {
        return `
            <div class="Input">
                <input value="${name}" class="Input-Input"/>
            </div>
        `;
    }

    destroy() {
        super.destroy();
        this._el.removeEventListener('change', this._onInput);
    }
}

export default InputView;
