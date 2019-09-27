import View from "../view";

class TableView extends View {
    constructor(el, store) {
        super(el, store);
        this.render = this.render.bind(this);
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

    render({ name, files }) {
        if (name === '') {
            return this.renderFiles(files);
        }
        return this.renderFiles(files.filter(file => file.name.includes(name)));
    }

    destroy() {
        super.destroy();
    }
}

export default TableView;
