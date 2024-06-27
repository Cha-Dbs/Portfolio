//Titre animé  ACCUEIL//
var aText = new Array(
    "Candidature alternance", 
    "CONCEPT DESIGN UX/UI"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    typewriter();



//FORMULAIRE > SERVEUR
    const form = document.querySelector("form");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("ok")
const nom = document.getElementById("Nom").value
const email= document.getElementById("Email").value
const message = document.getElementById("Message").value
console.log("Nom")
console.log("Email")
console.log("Message")
    if (nom === "" && email === "" && message === "") {
        console.log('Le champ nom est vide');
    } 
    else {
        console.log('Le champ nom est rempli');
    }
})
//
