//Deklaro variablat qe do te duhen
var btn = document.getElementById("myBtn");
var form = document.getElementById("myForm");
var heading = document.getElementById("myH");

//ne buton click, bej hide formen, dhe bej show heading ne ket menyre
btn.onclick = function(){
    form.setAttribute("class","hideForm");
    heading.setAttribute("class","showMessage");
}