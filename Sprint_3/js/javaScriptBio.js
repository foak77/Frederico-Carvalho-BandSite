//GET THE KEY
var key;
axios.get("https://project-1-api.herokuapp.com/register").then((resp) => {
  resposta = resp.data;
  //console.log(resp);
  key = resposta.api_key;
});

// var peoplesComments = [];
//CREATING THE ARRAYS FOR THE DATA COMMING FROM THE API
var comments = [];
//GET REQUEST FROM AXIOS - WILL RETURN A PROMISSE FROM THE API
axios
  .get("https://project-1-api.herokuapp.com/comments?api_key=key")
  .then((resp) => {
    // OBJECT SENT FROM THE SERVER ASSIGNED IN COMMENTS ARRAY
    comments = resp.data;
    // ITERATION FOR EACH ELEMENT IN THE ARRAY COMMENTS
    for (i = 0; i <= comments.length - 1; i++) {
      // let ind = i;
      var cN = comments[i].name;
      var cI = comments[i].comment;
      var cId = comments[i].id;
      var cL = comments[i].likes;
      var cT = comments[i].timestamp; // 1 JAN 1970 (NUMBER TYPEOF)

      let data = new Date(cT); // DIA / MES / ANO / AND A BUNCH OF NUMBERS RELATED TO THE DATE
      //let dia = data.getDate();
      //let mes = data.getMonth() + 1;
      //let ano = data.getFullYear();
      //let dateNow = Date.now();
      let diff = moment(data).fromNow(); //ACTUAL DATE - DATE TIMESTAMP
      let cD = diff; // dia + "/" + mes + "/" + ano + " ..." +
      /// mostrar na tela

      cP = "pH"; // cL + cP PHOTO + LIKE

      commentPresentation(cN, cD, cI, cP); //CALLING THE FUNCTION
    }
  });

// SELECTING THE FORM AND ASSIGNING INTO A VARIABLE
var formulario = document.querySelector(".conversation__form");
// CREATING THE EVENT LISTENER FUNCTION
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  //SELECTING THE ELEMENTS IN THE DOM AND ASSIGNING INTO VARIABLES - "INPUTS"
  let SectionName = document.querySelector(".conversation__input-name");
  let SectionComment = document.querySelector(
    ".conversation__form-input-comment"
  );

  //ASSIGNING THE "VALUE" FROM THE INPUT(html) INTO VARIABLES
  let cN = SectionName.value;
  let cCo = SectionComment.value;

  //POST of THE POST(COMMENT) SENT TO SERVER
  axios
    .post("https://project-1-api.herokuapp.com/comments?api_key=key", {
      name: cN,
      comment: cCo,
    })
    .then((resp) => {
      // ANSWER FROM THE SERVER

      let comment = resp.data;
      var cN = comment.name;
      var cCo = comment.comment;
      var cI = comment.id;
      var cL = comment.likes;
      var cT = comment.timestamp;

      var data = new Date(cT);
      //let dia = data.getDate();
      //let mes = data.getMonth() + 1;
      //let ano = data.getFullYear();

      //dateNow = Date.now();
      var diff = moment(data).fromNow(); // TIMESTAMP - ACTUAL DATE

      var cD = diff; //dia + "/" + mes + "/" + ano + " ..." +

      cP = "pH"; // cL + cP PHOTO + LIKE
      commentPresentation(cN, cD, cCo, cP);
    })

    // ALERT FORM RESP
    .catch((resp) =>
      alert("MISTAKE FROM RESPONSE: NAME OR COMMENT NOT INCLUDED")
    );
  //commentPresentation(cN, cD, cI, cP);
  formulario.reset(); // TO CLEAN THE INPUT AFTER SUBMIT CLICK
});

// FUNCTION OF PRESENTATION
function commentPresentation(
  commentName, //cN
  commentDate, //cD
  commentInfo, //cI
  commentPhoto //cP
) {
  //SELECTING THE DIV RIGHT UNDERNEATH THE FORM
  let out_put = document.querySelector(".output");

  //CREATING THE SECTION AND PREPENDING (NOT APPENDING) TO MAKE THE COMMENTS APPEAR ON TOP
  let conversation = document.createElement("section");
  conversation.classList.add("output__section");
  out_put.prepend(conversation);

  //CREATING THE LEFT AREA - FOR THE IMAGE "ROUND DIV" - CHILD OF CONVERSATION
  let Left = document.createElement("div");
  Left.classList.add("output__section-left");
  conversation.appendChild(Left);

  //IMAGE DIV - CHILD OF THE LEFT
  let outputImg = document.createElement("div");
  outputImg.classList.add("output__output-img");
  Left.appendChild(outputImg); //picture of the guy

  //CREATING THE RIGHT SIDE DIV FOR THE NAME / DATE AND DELETE - CHILD OF CONVERSATION
  let Right = document.createElement("div");
  Right.classList.add("output__section-right");
  conversation.appendChild(Right);

  //CREATING THE NAME / DATE / DELETE - CHILD OF THE RIGHT
  let Name_Date = document.createElement("div");
  Name_Date.classList.add("output__section-right-nameDate");
  Right.appendChild(Name_Date);

  //CREATING THE NAME DIV - CHILD OF THE NAME AND DATE - WILL RECEIVE THE VALUE OF THE INPUT "commentName"
  let SectionName = document.createElement("div");
  SectionName.classList.add("output__output-name", "font-paragraphH4-mob");
  Name_Date.appendChild(SectionName);
  SectionName.appendChild(document.createTextNode(commentName));

  //CREATING THE DATE DIV - CHILD OF THE NAME AND DATE - WILL RECEIVE THE VALUE OF THE INPUT "NEWDATE commentDate"
  let SectionDate = document.createElement("div");
  SectionDate.classList.add("output__output-date", "font-paragraphH4-mob");
  Name_Date.appendChild(SectionDate);
  SectionDate.appendChild(document.createTextNode(commentDate));

  //CREATING THE BUTTON DIV - CHILD OF THE NAME AND DATE - WILL SUBMIT THE ACTION EVENT FUNCTION
  let DeleteBtn = document.createElement("div");
  DeleteBtn.classList.add("output__output-delete");
  SectionDate.appendChild(DeleteBtn);

  //CREATING THE COMMENT DIV - CHILD OF RIGHT - WILL RECEIVE THE VALUE OF THE INPUT "commentInfo"
  let Comments = document.createElement("h4");
  Comments.classList.add("output__output-txt", "font-paragraphH4-mob");
  Right.appendChild(Comments);
  Comments.appendChild(document.createTextNode(commentInfo)); // O comentario
}
