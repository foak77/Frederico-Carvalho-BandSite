// Hello Everyone :)
// I am stuck in this problem.
// I am trying to build the html structure (very similar to this one down here) for the assignment
// When I append the Child to the parent Node it works.
// When I am try to add the second Element (child2) which is a Child of the Parent and a sibling Element to child1 it does't work.
// Any Suggestions?

// <div class="parent">
//   <div class="child1"></div>
//   <div class="child1"></div>
// </div>

// var pops = document.querySelector(".parent");
// var babyA = document.querySelector(".child1");
// var babyB = document.querySelector(".child2");

// parent.appendChild(babyA);
// babyA.nextElementSibling(babyB);

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

let showDate = document.querySelector(".shows__date");
let showVenue = document.querySelector(".shows__venue");
let showLocation = document.querySelector(".shows__location");

// function ShowSchedule() {

let scheduleFrame = document.querySelector(".shows__schedules-frame");

// Date
let dateWrap = document.createElement("div");
dateWrap.classList.add("shows__date-wrap");
let dateTitle = document.createElement("h4");
dateTitle.classList.add("font-listContactInfoH4-mob", "shows__date-title");
dateTitle.appendChild(document.createTextNode("DATE"));
let dateAnnounced = document.createElement("h4");
dateAnnounced.classList.add("font-listContactInfoH4-mob", "shows__date");

scheduleFrame.appendChild(dateWrap);
dateWrap.appendChild(dateTitle);
// dateAnnounced.appendChild();

//Venue
let venueWrap = document.createElement("div");
venueWrap.classList.add("shows__venue-wrap");
let venueTitle = document.createElement("h4");
venueTitle.classList.add("font-listContactInfoH4-mob", "shows__venue-title");
venueTitle.appendChild(document.createTextNode("VENUE"));
let venueAnnounced = document.createElement("h4");
venueAnnounced.classList.add("font-listContactInfoH4-mob", "shows__venue");

scheduleFrame.appendChild(venueWrap);
venueWrap.appendChild(venueTitle);
// venueAnnounced.appendChild();

//Location
let locationWrap = document.createElement("div");
locationWrap.classList.add("shows__location-wrap");
let locationTitle = document.createElement("h4");
locationTitle.classList.add(
  "font-listContactInfoH4-mob",
  "shows__location-title"
);
locationTitle.appendChild(document.createTextNode("LOCATION"));
let locationAnnounced = document.createElement("h4");
locationAnnounced.classList.add(
  "font-listContactInfoH4-mob",
  "shows__location"
);

scheduleFrame.appendChild(locationWrap);
locationWrap.appendChild(locationTitle);
// locationAnnounced.appendChild = showSchedule[0].location;

// button
let buyTickedBtn = document.createElement("button");
buyTickedBtn.classList.add("btn", "shows__button");
buyTickedBtn.appendChild(document.createTextNode("BUY TICKET"));

scheduleFrame.appendChild(buyTickedBtn);

// }

// showDate.innerHTML = showSchedule[0].date;
// showVenue.innerHTML = showSchedule[0].venue;
// showLocation.innerHTML = showSchedule[0].location;
