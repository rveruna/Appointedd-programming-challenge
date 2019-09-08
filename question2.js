var fs = require('fs');
fs.readFile('input.txt', "utf-8", function(err, data) {
    if (err) throw err;
    let regex1 = data.replace(/[0-9]+@|\[|\n/g, '');
    let regex2 = regex1.replace(/\]/g, ',');
    let createArray = regex2.split(',');
    // Iterating over the array using map 
    // Spliting the element on slash and capturing end date
    let splitOnSlash = createArray.map(i => i.split('/')[1]);
    // Sorting dates from latest to earliest
    let sortedDates = splitOnSlash.sort(function(a, b) {
        return new Date(b) - new Date(a);
    });
    //Picking the latest date
    let latestdate = sortedDates[0];
    let result = new Date(latestdate);

    // Output is 2020-01-02T11:30:00.000Z

    console.log('result ------------------------------------');
    console.log(result);

});