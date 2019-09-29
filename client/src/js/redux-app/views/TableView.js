import View from "../View";
import { fetchFilesStart } from "../actions";

class TableView extends View {
    constructor(el, store) {
        super(el, store);
        // debugger;
        super.dispatch(fetchFilesStart());
    }

    renderFiles(files) {
        files.sort((a, b) => a.type.length - b.type.length);
        const result = files.map(file => {
            if (file.name.includes('README')) {
                file.type = 'file';
            }
            return `
                <tr class="Table-Row">
                    <td class="Table-Cell Table-Cell">
                        <div class="File File_type_dir">
                            <div class="File-Icon File-Icon_type_${file.type}"></div>
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
            `});
        return result.join('');
    }

    render({ filter: { filter }, files: { files } }) {
        const filterStr = filter.trim().toLowerCase();
        if (filter === '') {
            return this.renderFiles(files);
        }
        return this.renderFiles(files.filter(file => file.name.toLowerCase().includes(filterStr)));
    }

    destroy() {
        super.destroy();
    }
}

export default TableView;
