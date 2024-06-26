import "./styles.css";

export default {
    autoColumnWidth(table, padding = 10) {
        table.classList.add("r-table");
        const colgroup = table.querySelector("colgroup");
        const colDefs = [...colgroup.querySelectorAll("col")];
        colDefs.forEach((col) => {
            const clsName = col.getAttribute("name");
            const cells = [
                ...table.querySelectorAll(`td.${clsName}`),
                ...table.querySelectorAll(`th.${clsName}`),
            ];
            if (cells[0]?.classList?.contains?.("not-auto")) {
                return;
            }
            const widthList = cells.map((el) => {
                return el.querySelector(".cell")?.scrollWidth || 0;
            });
            const max = Math.max(...widthList);
            table.querySelectorAll(`col[name=${clsName}]`).forEach((el) => {
                el.setAttribute("width", max + padding);
            });
        });
    }
};
