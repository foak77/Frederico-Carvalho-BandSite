let scheduleFrame = document.querySelector(".shows__schedules-frame");
var showSchedule = [
  {
    // position 0
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fancisco, CA",
    tickets: "BUY - SELLIN FAST",
  },
  {
    // position 1
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fancisco, CA",
    tickets: "- SOLD OUT -",
  },
  {
    // position 2
    date: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Fancisco, CA",
    tickets: "BUY - CHARITY EVENT",
  },
  {
    // position 3
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Fancisco, CA",
    tickets: "BUY TICKET",
  },
  {
    // position 4
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Fancisco, CA",
    tickets: "BUY - AWESOME MUSIC/VENUE",
  },
  {
    // position 5
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Fancisco, CA",
    tickets: "BUY TICKET",
  },
];

for (i = 0; i <= showSchedule.length - 1; i++) {
  let dS = showSchedule[i].date; //day
  let vS = showSchedule[i].venue; //venue
  let lS = showSchedule[i].location; //local
  let tP = showSchedule[i].tickets; // future function to buy

  function showSchedulePresentation(
    dataShow,
    venueShow,
    locationShow,
    ticketProcedure
  ) {
    //wrapping
    let wrapping = document.createElement("div");
    wrapping.classList.add("shows__wrapping");
    scheduleFrame.appendChild(wrapping);

    // Date
    let dateWrap = document.createElement("div");
    dateWrap.classList.add("shows__date-wrap");
    wrapping.appendChild(dateWrap);

    let dateTitle = document.createElement("h4");
    dateTitle.classList.add("font-listContactInfoH4-mob", "shows__date-title");
    dateWrap.appendChild(dateTitle);
    dateTitle.appendChild(document.createTextNode("DATE"));

    let dateAnnounced = document.createElement("h4");
    dateAnnounced.classList.add("font-listContactInfoH4-mob", "shows__date");
    dateWrap.appendChild(dateAnnounced);
    dateAnnounced.appendChild(document.createTextNode(dataShow)); // DATE

    //Venue
    let venueWrap = document.createElement("div");
    venueWrap.classList.add("shows__venue-wrap");
    wrapping.appendChild(venueWrap);

    let venueTitle = document.createElement("h4");
    venueTitle.classList.add(
      "font-listContactInfoH4-mob",
      "shows__venue-title"
    );
    venueWrap.appendChild(venueTitle);
    venueTitle.appendChild(document.createTextNode("VENUE"));

    let venueAnnounced = document.createElement("h4");
    venueAnnounced.classList.add("font-listContactInfoH4-mob", "shows__venue");
    venueWrap.appendChild(venueAnnounced);
    venueAnnounced.appendChild(document.createTextNode(venueShow)); // VENUNE NAME

    //Location
    let locationWrap = document.createElement("div");
    locationWrap.classList.add("shows__location-wrap");
    wrapping.appendChild(locationWrap);

    let locationTitle = document.createElement("h4");
    locationTitle.classList.add(
      "font-listContactInfoH4-mob",
      "shows__location-title"
    );
    locationWrap.appendChild(locationTitle);
    locationTitle.appendChild(document.createTextNode("LOCATION"));

    let locationAnnounced = document.createElement("h4");
    locationAnnounced.classList.add(
      "font-listContactInfoH4-mob",
      "shows__location"
    );
    locationWrap.appendChild(locationAnnounced);
    locationAnnounced.appendChild(document.createTextNode(locationShow)); // LOCATION

    //button
    let buyTickedBtn = document.createElement("button");
    buyTickedBtn.classList.add("btn", "shows__button");
    buyTickedBtn.appendChild(document.createTextNode(tP));
    wrapping.appendChild(buyTickedBtn);
    //future function to buy ticket event click/submit
  }
  showSchedulePresentation(dS, vS, lS, tP);
}
