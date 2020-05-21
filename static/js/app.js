// import data from data.js
const tableData = data;

// reference the HTML table using D3
var tbody = d3.select("tbody");

// create function to put data in a table
function buildTable(data) {

    // Clear the table with an empty string to begin
    tbody.html("");

    // Create a for loop to go through each row of the array
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the data row and add
        // each value as a table cell (td)
        Object.values(datarow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}