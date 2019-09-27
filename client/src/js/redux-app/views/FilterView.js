import View from "../View";
import { setFilterAction } from "../actions";

class FilterView extends View {
    constructor(el, store) {
        super(el, store);
        this._onChange = this._onChange.bind(this);
        this._el.addEventListener('change', this._onChange);
    }

    _onChange(e) {
        super.dispatch(setFilterAction(e.target.value));
    }

    render({ filter: { filter } }) {
        return `
            <div class="Input">
                <input value="${filter}" class="Input-Input"/>
            </div>
        `;
    }

    destroy() {
        super.destroy();
        this._el.removeEventListener('change', this._onChange);
    }
}

export default FilterView;
