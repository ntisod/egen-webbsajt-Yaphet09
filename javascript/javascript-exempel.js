function authorDialog(){
    alert("Japhet har gjort denna sida år 2020.");
}

function changecolor(color){
    document.getElementById("stycke").style.backgroundColor = color;
    document.getElementById("rubrik").innerHTML = "Japhet" ; 
} 

   var value = true;
function pictureChange() {                                                     
    var image = document.getElementById('pictureChange');

    if (image.src.match("Saitama.ok1.png")) {
        image.src = "saitama.ok2.png";
    }
    else {
        image.src = "Saitama.ok1.png";
    }
}

function disname() {
    var x, text;

              x = document.getElementById("name").value;

              text = "Hej " + x + "!";

              alert(text);
              
              document.getElementById("demo").innerHTML = text;           


}
    


  
  
   // japhet, 16 03 2020