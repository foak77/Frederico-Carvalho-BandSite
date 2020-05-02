var peoplesComments = [
  {
    //position 0
    name: "",
    comment: "",
  },
  {
    //position 1
    name: "",
    comment: "",
  },
  {
    //position 2
    name: "",
    comment: "",
  },
];

// function peepsComments() {
//frame
let conversationFrame = document.querySelector(".conversation");

//wrap
let conversationSection = document.createElement("selection");
conversationSection.classList.add("conversation__section");
conversationSection.appendChild(conversationFrame);

//left side for image
let conversationSectionLeft = document.createElement("div");
conversationSectionLeft.classList.add("conversation__section-left");
conversationSection.appendChild(conversationSectionLeft);

//image output
let outputImg = document.createElement("div");
outputImg.classList.add("conversation__output-img");
outputImg.appendChild(conversationSectionLeft);

//right side for name date and comment
let conversationSectionRight = document.createElement("div");
conversationSectionRight.classList.add("conversation__section-right");
conversationSection.appendChild(conversationSectionRight);

let conversationSection_Name_Date = document.createElement("div");
conversationSection_Name_Date.classList.add(
  "conversation__section-right-nameDate"
);
conversationSectionRight.appendChild(conversationSection_Name_Date);

let conversationSectionName = document.createElement("div");
conversationSectionName.classList.add(
  "conversation__output-name",
  "font-paragraphH4-mob"
);
conversationSectionRight.appendChild(conversationSectionName);
conversationSectionName.appendChild(document.createTextNode("NOME DO CARA"));

let conversationSectionDate = document.createElement("div");
conversationSectionDate.classList.add(
  "conversation__output-date",
  "font-paragraphH4-mob"
);
conversationSectionRight.appendChild(conversationSectionDate);
conversationSectionDate.appendChild(document.createTextNode("DIA DE ESCREVEU"));

let conversationComment = document.createElement("h4");
conversationComment.classList.add(
  "conversation__output-txt",
  "font-paragraphH4-mobb"
);
conversationSection.appendChild(conversationComment);
conversationComment.appendChild(document.createTextNode("Commentario Aqui"));
