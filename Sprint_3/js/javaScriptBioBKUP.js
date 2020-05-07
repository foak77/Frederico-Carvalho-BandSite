//GET THE KEY
var key;
axios.get("https://project-1-api.herokuapp.com/register").then((resp) => {
  resposta = resp.data;
  console.log(resposta.api_key);
  key = resposta.api_key;
});

var peoplesComments = [];
var comments = [];
axios
  .get("https://project-1-api.herokuapp.com/comments?api_key=key")
  .then((resp) => {
    comments = resp.data;

    for (i = 0; i <= comments.length - 1; i++) {
      let ind = i;
      var cN = comments[i].name;
      var cI = comments[i].comment;
      var cId = comments[i].id;
      var cL = comments[i].likes;
      var cT = comments[i].timestamp;

      let data = new Date(cT);
      let dia = data.getDate();
      let mes = data.getMonth();
      let ano = data.getFullYear();
      let dateNow = Date.now();
      let diff = moment(data).fromNow();
      let cD = dia + "/" + mes + "/" + ano + " ..." + diff;
      /// mostrar na tela
      cP = "pH";
      commentPresentation(cN, cD, cI, cP);
    }
  });

//DATE
let data = new Date();
console.log(data);
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();

var cD = dia + "/" + mes + "/" + ano;
var cN;
var cI;
var cP = "PH";

var formulario = document.querySelector(".conversation__form");

// EVENT LISTENER
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  //SELECTING THE ELEMENTS IN THE DOM AND ASSIGNING INTO VARIABLES
  let SectionName = document.querySelector(".conversation__input-name");
  let SectionComment = document.querySelector(
    ".conversation__form-input-comment"
  );

  //ASSIGNING THE "VALUE" FROM THE INPUT INTO VARIABLES
  cN = SectionName.value;
  cI = SectionComment.value;

  commentPresentation(cN, cD, cI, cP);
  formulario.reset();
});

// FUNCTION OF PRESENTATION
function commentPresentation(
  commentName,
  commentDate,
  commentInfo,
  commentPhoto
) {
  let out_put = document.querySelector(".output");

  let conversation = document.createElement("section");
  conversation.classList.add("output__section");
  out_put.prepend(conversation);

  //left side for image
  let Left = document.createElement("div");
  Left.classList.add("output__section-left");
  conversation.appendChild(Left);

  //image output
  let outputImg = document.createElement("div");
  outputImg.classList.add("output__output-img");
  Left.appendChild(outputImg); //picture of the guy

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
  SectionName.appendChild(document.createTextNode(commentName)); // Nome do Cara

  //date
  let SectionDate = document.createElement("div");
  SectionDate.classList.add("output__output-date", "font-paragraphH4-mob");
  Name_Date.appendChild(SectionDate);
  SectionDate.appendChild(document.createTextNode(commentDate)); // Data que foi escrita

  //delete button
  let DeleteBtn = document.createElement("div");
  DeleteBtn.classList.add("output__output-delete");
  SectionDate.appendChild(DeleteBtn);

  //comment
  let Comments = document.createElement("h4");
  Comments.classList.add("output__output-txt", "font-paragraphH4-mob");
  Right.appendChild(Comments);
  Comments.appendChild(document.createTextNode(commentInfo)); // O comentario
}

// ______________________________________________________________________________________________
// var peoplesComments = [
//   {
//     name: "FRED IS SORRY :(",
//     dateWritten: "12/18/2018",
//     comment:
//       "I COUDN'T INSERT THE COMMENT BEFORE THESE PRE EXISTING COMMENTS - TRYED HARD...HOPE DANNIL GOES THROUGH THIS STEP, BUT THEY DO GET INSERTED AT THE BOTTOM :)",
//     photo: "ph",
//   },
//   {
//     name: "Gary Wong",
//     dateWritten: "12/12/2018",
//     comment:
//       "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
//     photo: "ph",
//   },
//   {
//     name: "Theodore Duncan",
//     dateWritten: "11/15/2018",
//     comment:
//       "How can someone be so good!!!You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
//     photo: "ph",
//   },
// ];

// function commentPresentation(
//   commentName,
//   commentDate,
//   commentInfo,
//   commentPhoto
// ) {
//   let out_put = document.querySelector(".output");

//   let conversation = document.createElement("section");
//   conversation.classList.add("output__section");
//   out_put.prepend(conversation);

//   //left side for image
//   let Left = document.createElement("div");
//   Left.classList.add("output__section-left");
//   conversation.appendChild(Left);

//   //image output
//   let outputImg = document.createElement("div");
//   outputImg.classList.add("output__output-img");
//   Left.appendChild(outputImg); //picture of the guy

//   //right side for name date and comment
//   let Right = document.createElement("div");
//   Right.classList.add("output__section-right");
//   conversation.appendChild(Right);

//   //name and date
//   let Name_Date = document.createElement("div");
//   Name_Date.classList.add("output__section-right-nameDate");
//   Right.appendChild(Name_Date);

//   //name
//   let SectionName = document.createElement("div");
//   SectionName.classList.add("output__output-name", "font-paragraphH4-mob");
//   Name_Date.appendChild(SectionName);
//   SectionName.appendChild(document.createTextNode(commentName)); // Nome do Cara

//   //date
//   let SectionDate = document.createElement("div");
//   SectionDate.classList.add("output__output-date", "font-paragraphH4-mob");
//   Name_Date.appendChild(SectionDate);
//   SectionDate.appendChild(document.createTextNode(commentDate)); // Data que foi escrita

//   //delete button
//   let DeleteBtn = document.createElement("div");
//   DeleteBtn.classList.add("output__output-delete");
//   SectionDate.appendChild(DeleteBtn);

//   //comment
//   let Comments = document.createElement("h4");
//   Comments.classList.add("output__output-txt", "font-paragraphH4-mob");
//   Right.appendChild(Comments);
//   Comments.appendChild(document.createTextNode(commentInfo)); // O comentario
// }

// // FIRST OBJECT OF THE ARRAY
// cN = peoplesComments[0].name;
// cD = peoplesComments[0].dateWritten;
// cI = peoplesComments[0].comment;
// cP = peoplesComments[0].photo;
// commentPresentation(cN, cD, cI, cP);

// cN = peoplesComments[1].name;
// cD = peoplesComments[1].dateWritten;
// cI = peoplesComments[1].comment;
// cP = peoplesComments[1].photo;
// commentPresentation(cN, cD, cI, cP);

// cN = peoplesComments[2].name;
// cD = peoplesComments[2].dateWritten;
// cI = peoplesComments[2].comment;
// cP = peoplesComments[2].photo;
// commentPresentation(cN, cD, cI, cP);

// for (i = 0; i < peoplesComments.length; i++) {
//   console.log(peoplesComments[i]);
// }

// //DATE
// let clickOfDate = new Date();
// let day = clickOfDate.getMonth() + 1;
// let month = clickOfDate.getDate();
// let year = clickOfDate.getFullYear();

// var cD = day + "/" + month + "/" + year;
// var cN;
// var cI;
// var cP = "PH";

// var formulario = document.querySelector(".conversation__form");

// // EVENT LISTENER
// formulario.addEventListener("submit", function (e) {
//   e.preventDefault();

//   //SELECTING THE ELEMENTS IN THE DOM AND ASSIGNING INTO VARIABLES
//   let SectionName = document.querySelector(".conversation__input-name");
//   let SectionComment = document.querySelector(
//     ".conversation__form-input-comment"
//   );

//   //ASSIGNING THE "VALUE" FROM THE INPUT INTO VARIABLES
//   cN = SectionName.value;
//   cI = SectionComment.value;

//   //CREATING A NEW OBJECT
//   var newComment = {
//     name: cN,
//     dateWritten: cD, //LINE 102 TO 106
//     comment: cI,
//     photo: "ph",
//   };

//   peoplesComments.push(newComment);

//   //FINDING THE LAST ELEMENT IN THE ARRAY
//   var i = peoplesComments.length - 1;

//   //ASSIGNING THE RESULTS
//   cN = peoplesComments[i].name;
//   cD = peoplesComments[i].dateWritten;
//   cI = peoplesComments[i].comment;
//   cP = peoplesComments[i].photo;
//   commentPresentation(cN, cD, cI, cP);

//   formulario.reset();
// });
