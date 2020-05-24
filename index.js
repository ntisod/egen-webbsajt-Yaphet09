
/* Funktionen gör att information i contact-form försvinner*/
function cleartext(){
    document.getElementById("text-name").value = "";
    document.getElementById("text-email").value = "";
    document.getElementById("text-number").value = "";
    document.getElementById("text-message").value = "";

    alert("Message Sent!");
}