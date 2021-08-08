/* The provided dataset */
let data = [{
        ID: 1,
        date: '2020-01-01',
        name: 'Delphine',
        total: 1234.00
    },
    {
        ID: 2,
        date: '2020-02-02',
        name: 'Stela',
        total: 1234.07
    },
    {
        ID: 3,
        date: '2020-01-01',
        name: 'Gary',
        total: 234.40
    },
    {
        ID: 4,
        date: '2020-03-03',
        name: 'Ralica',
        total: 123.45
    },
    {
        ID: 5,
        date: '2020-04-04',
        name: 'James',
        total: 345.12
    },
    {
        ID: 6,
        date: '2020-05-05',
        name: 'Tanya',
        total: 623.56
    },
];

function populateTable() {
    var table = "";
    for (var i in data) {
        table += "<tr>";
        table += "<td>" +
            data[i].ID + "</td>" +
            "<td>" + data[i].date + "</td>" +
            "<td>" + data[i].name + "</td>" +
            "<td>" + data[i].total + "</td>";
        table += "</tr>";
    }

    document.getElementById("result").innerHTML = table;

    var totals = 0
    for (var i in data) {
        totals += data[i].total
    }
    totals = Math.round(totals * 100) / 100
    document.getElementById("totals").innerHTML = totals;
}
$(document).ready(function() {
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".table_body tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            document.getElementById("totals").innerHTML = "";
        });
    });
});