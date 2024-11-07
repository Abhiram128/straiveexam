// json2html.js
export default function json2html(data) {
    // Start the table with the data-user attribute
    let html = '<table data-user="sayaniaram@gmail.com">\n';
    
    // Extract column headers
    const columns = new Set();
    data.forEach(row => {
        Object.keys(row).forEach(key => {
            columns.add(key);
        });
    });
    
    // Convert Set to an Array and build the header row
    const columnsArray = Array.from(columns);
    html += '  <thead>\n    <tr>';
    columnsArray.forEach(col => {
        html += `<th>${col}</th>`;
    });
    html += '</tr>\n  </thead>\n';
    
    // Build the body rows
    html += '  <tbody>\n';
    data.forEach(row => {
        html += '    <tr>';
        columnsArray.forEach(col => {
            html += `<td>${row[col] !== undefined ? row[col] : ''}</td>`;
        });
        html += '</tr>\n';
    });
    html += '  </tbody>\n</table>';
    
    return html;
}
