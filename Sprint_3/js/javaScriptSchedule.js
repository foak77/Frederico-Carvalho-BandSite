let scheduleFrame = document.querySelector(".shows__schedules-frame");

// GET KEY
var key;
axios.get("https://project-1-api.herokuapp.com/register").then((resp) => {
  keydata = resp.data;
  //console.log(resp);
  key = keydata.api_key;
  //console.log(keydata);
});
// GET SHOW DATES
var showdates = [];

axios
  .get("https://project-1-api.herokuapp.com/showdates?api_key=key")
  .then((resp) => {
    showdates = resp.data;
    //console.log(resp);
    for (i = 0; i <= showdates.length - 1; i++) {
      //let ind = i;
      // THE iD IDENTIFIES THE SCHEDULE
      let tP = showdates[i].id;
      let dS = showdates[i].date;
      let vS = showdates[i].place;
      let lS = showdates[i].location;

      showSchedulePresentation(dS, vS, lS, "BUY TICKET");
    }
  });

// ____________________________________________

//BUY TICKET - STRING / ticketProcedure
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
  venueTitle.classList.add("font-listContactInfoH4-mob", "shows__venue-title");
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
  buyTickedBtn.appendChild(document.createTextNode(ticketProcedure));
  wrapping.appendChild(buyTickedBtn);
  //future function to buy ticket event click/submit
}
