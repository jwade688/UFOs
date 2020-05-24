# UFO Challenge
- Create additional filters for the webpage. The advanced filtering capability will allow users to filter the data by multiple factors.

## Challenge Overview
- Create, update, and deploy JavaScript functions to provide additional table filters.
    - Date
    - City
    - State
    - Country
    - Shape

# Documents required for the challenge:
- index.html (contains the website and structure as well as some formatting)
- style.css (contains further formatting for the site)
- nasa.jpg (image used on jumbotron of site)
- data.js (contains all UFO data)
- app.js (contains the filtering code for the table and search capabilities)

# UFO summary and analysis:
- The purpose of this project was to add 4 filters (City, State, Country, and Shape) to the existing one (Date) so we can view the date by these limiting parameters. I also set out to be able to search by multiple parameters to give the site further functionality. The first part of the project consisted of updated the index.html where I added the forms for City, State, Country, and Shape. The second part of the project was updating the app.js file. This file contains the code to filter by the different parameters. I used D3 functions to save the input values and the big arrow functions in if/then conditionals to loop through the data and save the matches to the filteredData array. Using the filteredData array, I ran it through the buildTable function which filled the table's cells in by row. 

# Recommendations for further development:
- One recommendation would be to add functionality so that when you enter a value into one of the filters and then press 'enter,' then the table will filter. Right now you need to click the button filter data before the code runs. Another recommendation would be to add dropdown menus to the filter options instead of having to guess which values exist and type it in in the exact format needed to match. With a dropdown menu, you can still type but you can view all the available options as well. Finally, I'd add more options in the navbar like a button to click that will move you to the table data.