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
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Create a function to filter 
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if date was entered & filter data using date
    if (date) {
        // Apply filter to table data to only keep matchin rows
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    //@NOTE: If no date was entered then filteredData will just be original tableData
    buildTable(filteredData);
}

// Function that handles a click
d3.selectAll("#filter-btn").on("click", handleClick);

// Display unfiltered data immediately when loading page (especially first time)
buildTable(tableData);