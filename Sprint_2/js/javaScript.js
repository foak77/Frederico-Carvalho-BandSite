// var schedule =
//   '<div class="shows__schedules-frame">' +
//   '<div class="shows__date-wrap">' +
//   '<h4 class="font-listContactInfoH4-mob shows__date-title">DATES</h4>' +
//   '<h4 class="font-listContactInfoH4-mob shows__date"></h4>' +
//   "</div>" +
//   '<div class="shows__venue-wrap">' +
//   '<h4 class="font-listContactInfoH4-mob shows__venue-title">VENUE</h4>' +
//   '<h4 class="font-listContactInfoH4-mob shows__venue"></h4>' +
//   "</div>" +
//   '<div class="shows__location-wrap">' +
//   '<h4 class="font-listContactInfoH4-mob shows__location-title">LOCATION</h4>' +
//   '<h4 class="font-listContactInfoH4-mob shows__location"></h4>' +
//   "</div>" +
//   '<button class="btn shows__button">BUY TICKET</button>';

var showSchedule = [
  {
    //position 0
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fancisco, CA",
  },
  {
    //position 1
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fancisco, CA",
  },
  {
    //position 2
    date: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Fancisco, CA",
  },
  {
    //position 3
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Fancisco, CA",
  },
  {
    //position 4
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Fancisco, CA",
  },
  {
    //position 5
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Fancisco, CA",
  },
];

// // console.log(showSchedule[0].date);

let showDate = document.querySelector(".shows__date");
let showVenue = document.querySelector(".shows__venue");
let showLocation = document.querySelector(".shows__location");

showDate.innerHTML = showSchedule[0].date;
showVenue.innerHTML = showSchedule[0].venue;
showLocation.innerHTML = showSchedule[0].location;

// document.querySelector(".shows__schedules-frame").innerHTML = schedule;
// document.querySelector(".shows__schedules-frame1").innerHTML = schedule;
// document.querySelector(".shows__schedules-frame2").innerHTML = schedule;
// document.querySelector(".shows__schedules-frame3").innerHTML = schedule;
// document.querySelector(".shows__schedules-frame4").innerHTML = schedule;
// document.querySelector(".shows__schedules-frame5").innerHTML = schedule;
