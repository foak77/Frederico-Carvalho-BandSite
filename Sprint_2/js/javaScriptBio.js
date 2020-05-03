// var peoplesComments = [
//   {
//     //position 0
//     name: "",
//     comment: "",
//   },
//   {
//     //position 1
//     name: "",
//     comment: "",
//   },
//   {
//     //position 2
//     name: "",
//     comment: "",
//   },
// ];

// function peepsComments() {
//frame
let frame = document.querySelector(".conversation");

//wrap
let out_put = document.createElement("div");
out_put.classList.add("output");
frame.appendChild(out_put);

let conversation = document.createElement("section");
conversation.classList.add("output__section");
out_put.appendChild(conversation);

//left side for image
let Left = document.createElement("div");
Left.classList.add("output__section-left");
conversation.appendChild(Left);
//image output
let outputImg = document.createElement("div");
outputImg.classList.add("output__output-img");
Left.appendChild(outputImg);

//right side for name date and comment
let Right = document.createElement("div");
Right.classList.add("output__section-right");
conversation.appendChild(Right);

//name and date
let Name_Date = document.createElement("div");
Name_Date.classList.add("output__section-right-nameDate");
Right.appendChild(Name_Date);

//name
let SectionName = document.createElement("div");
SectionName.classList.add("output__output-name", "font-paragraphH4-mob");
Name_Date.appendChild(SectionName);
SectionName.appendChild(document.createTextNode("Nome do Cara"));

//date
let SectionDate = document.createElement("div");
SectionDate.classList.add("output__output-date", "font-paragraphH4-mob");
Name_Date.appendChild(SectionDate);
SectionDate.appendChild(document.createTextNode("Dia que escreveu"));

//comment
let Comments = document.createElement("h4");
Comments.classList.add("output__output-txt", "font-paragraphH4-mob");
Right.appendChild(Comments);
Comments.appendChild(document.createTextNode("Commentario Aqui"));
