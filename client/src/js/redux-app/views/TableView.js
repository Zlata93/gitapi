import View from "../View";
import { initTableAction } from "../actions";

class TableView extends View {
    constructor(el, store) {
        super(el, store);
        this._files = [
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
        ];
        super.dispatch(initTableAction(this._files));
    }

    renderFiles(files) {
        const result = files.map(file => `
                <tr class="Table-Row">
                    <td class="Table-Cell Table-Cell">
                        <div class="File File_type_dir">
                            <div class="File-Icon File-Icon_type_dir"></div>
                            ${file.name}
                        </div>
                    </td>
                    <td class="Table-Cell">
                        <a href="#" class="Link">c53dsv</a>
                    </td>
                    <td class="Table-Cell">[vcs] test for empty commit message</td>
                    <td class="Table-Cell">
                        <span class="User">nikitxskv</span>
                    </td>
                    <td class="Table-Cell">1 min ago</td>
                </tr>
            `);
        return result.join('');
    }

    render({ filter: { filter }, files: { files } }) {
        if (filter === '') {
            return this.renderFiles(files);
        }
        return this.renderFiles(files.filter(file => file.name.includes(filter)));
    }

    destroy() {
        super.destroy();
    }
}

export default TableView;
