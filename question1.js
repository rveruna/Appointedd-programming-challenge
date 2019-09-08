// Requiring fs module in which 
// readFile function is defined. 
const fs = require('fs');

// Extracting content of txt file
// Reading data in utf-8 format 
fs.readFile('input.txt', 'utf-8', function(err, data) {
    if (err) throw err;

    // Making one big array of intervals from each worker data

    // Removing ID number, opening brackets and empty space
    let regex1 = data.replace(/[0-9]+@|\[|\n/g, '');
    // Replacing all closing brackets with ,
    let regex2 = regex1.replace(/\]/g, ',');

    // Spliting string into array of substrings
    let createArray = regex2.split(',');

    // Iterating over the array using map 
    // Spliting the element on slash and capturing start date
    let splitOnSlash = createArray.map(i => i.split('/')[0]);

    // Sorting dates from earliest to latest
    let sortedDates = splitOnSlash.sort(function(a, b) {
        return new Date(a) - new Date(b);
    });

    //Picking the earliest date
    let earliestDate = sortedDates[0];

    // Changing the date format to mirror the expected output
    let result = new Date(earliestDate);

    // Output is 2020-01-01T00:15:00.000Z

    console.log('result ----------------------------');
    console.log(result);

});