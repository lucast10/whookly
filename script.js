var dayOfMonth = new Date();
var date = dayOfMonth.getDate();

document.addEventListener("DOMContentLoaded", function () { 
    if (date <= 7) {
        console.log("hi1");
        document.getElementById('segundoesquema').style.display = 'none';
        document.getElementById('terceresquema').style.display = 'none';
        document.getElementById('cuartoesquema').style.display = 'none';
    } else if (date >= 8 && date <= 14) {
        console.log("hi2");
        document.getElementById('esquema').style.display = 'none';
        document.getElementById('terceresquema').style.display = 'none';
        document.getElementById('cuartoesquema').style.display = 'none';  
    } else if (date >= 15 && date <= 21) {
        console.log("hi3");
        document.getElementById('esquema').style.display = 'none';    
        document.getElementById('segundoesquema').style.display = 'none';
        document.getElementById('cuartoesquema').style.display = 'none';
    } else {
        console.log("hi4");
        document.getElementById('esquema').style.display = 'none';   
        document.getElementById('segundoesquema').style.display = 'none';
        document.getElementById('terceresquema').style.display = 'none';
    }
 });

