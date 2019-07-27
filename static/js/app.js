// from data.js
var tableData = data;
var tbody = d3.select("tbody");


// YOUR CODE HERE!
data.forEach((obj,i) => {
    var row = tbody.append("tr");
    row.append("td").text(obj.datetime);
    row.append("td").text(obj.city);
    row.append("td").text(obj.state);
    row.append("td").text(obj.country);
    row.append("td").text(obj.shape);
    row.append("td").text(obj.durationMinutes);
    row.append("td").text(obj.comments);
});

var button = d3.select('#filter-btn');
var inputField = d3.select('#datetime');

button.on('click',function() {
    d3.selectAll('td').remove()
    var inputField = d3.select('#datetime');
    var inputValue = inputField.property("value");
    var filteredData = data.filter(data => data.datetime === inputValue);

    filteredData.forEach((obj,i) => {
        var row = tbody.append("tr");
    row.append('td').text(obj.datetime)
    row.append("td").text(obj.city);
    row.append("td").text(obj.state);
    row.append("td").text(obj.country);
    row.append("td").text(obj.shape);
    row.append("td").text(obj.durationMinutes);
    row.append("td").text(obj.comments);
    });
});