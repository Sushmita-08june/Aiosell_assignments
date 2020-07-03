// creating the variable and storing the json data into it
var jsondata = {
  "hotel_name": "Octave Bengaluru",
  "bookingId": "87654321",
  "status": "new",
  "booked_on": "2020-06-10 06:30:19",
  "source": "ezee",
  "check_in": "2020-06-11",
  "check_out": "2020-06-12",
  "channel": "Booking.com",
  "total_price": 3000,
  "total_tax": 300,
  "total_payment": 3300,
  "comment": [
    "I want tea bags",
    "Need breakfast"
  ],
  "booked_by": {
    "firstName": "Arun",
    "lastName": "S",
    "address": {
      "country": "India"
    },
    "email": "one@test.com",
    "phone": "+91-9999999999"
  },
  "rooms": [
    {
      "name": "Deluxe",
      "occupancy": {
        "adult": 2,
        "child": 0
      },
      "price": {
        "sell_rate": 1000.0,
        "tax": 100.0
      }
    },
    {
      "name": "Suite",
      "occupancy": {
        "adult": 2,
        "child": 2
      },
      "price": {
        "sell_rate": 2000.0,
        "tax": 200.0
      }
    }
  ]
}
// function to check and display the data into table
function display(){
    // getting the date range and storing them in variables to check whether the table has data
    // within that range
var checkFromDateString = document.getElementById('fromDate').value;
var checkToDateString = document.getElementById('toDate').value;

if (checkFromDateString ==""){
    document.getElementById('toDate').value = "";
    alert("Please select Valid Date Range");
}
else {
    var checkfrom = new Date(checkFromDateString);
    var checkto = new Date(checkToDateString);
    // creating the list of months to display the dsired date format "dd MMM"
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        var fromDate = new Date(jsondata.check_in);
        var toDate = new Date(jsondata.check_out);
        var booked = new Date(jsondata.booked_on);
    let checkin = fromDate.getDate() + " " + months[fromDate.getMonth()]
    let checkout = toDate.getDate() + " " + months[toDate.getMonth()]
    let bookedon = booked.getDate() + " " + months[booked.getMonth()] + " " + booked.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        var Difference_In_Time = toDate.getTime() - fromDate.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    // condition to check whether the booked date lies within selected date range and call the next function to execute
    if ( booked >= checkfrom && checkfrom <= checkto){
        show()
    }
    else{
        alert("No results found for selected dates");
    }


// function that inserts data into table to show once the date matches
function show(){
    // creating table objects/variables
    var tableObj = document.getElementById("jasonDisplay");
    var row = tableObj.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    // directing the data to table cells
    cell1.innerHTML=jsondata.channel;
    cell2.innerHTML=jsondata.bookingId;
    cell3.innerHTML=jsondata.booked_by["firstName"] + " " +jsondata.booked_by["lastName"];
    cell4.innerHTML=bookedon;
    cell5.innerHTML=checkin;
    cell6.innerHTML=checkout;
    cell7.innerHTML=jsondata.rooms[0].name;
    cell8.innerHTML=Difference_In_Days;
    cell9.innerHTML=jsondata.rooms.length;
    cell10.innerHTML=jsondata.total_payment;
     }
}
}
