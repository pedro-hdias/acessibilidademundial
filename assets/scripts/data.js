var Elem = document.getElementById('Clock');

var now = new Date();
var mName = now.getMonth() + 1;
var dName = now.getDay() + 1;
var dayNr = now.getDate();
var yearNr = now.getYear();
if (dName == 1) {
    Day = "Domingo";
}
if (dName == 2) {
    Day = "Segunda-feira";
}
if (dName == 3) {
    Day = "Ter&#231;a-feira";
}
if (dName == 4) {
    Day = "Quarta-feira";
}
if (dName == 5) {
    Day = "Quinta-feira";
}
if (dName == 6) {
    Day = "Sexta-feira";
}
if (dName == 7) {
    Day = "S&aacute;bado";
}
if (!mName < 10) {
    Month = "0" + mName;
}
yearNr = 1900 + yearNr;
var data = Day + ", " + dayNr + "/" + Month + "/" + yearNr;

function Horario() {
    var Hoje = new Date();
    var Horas = Hoje.getHours();
    if (Horas < 10) {
        Horas = "0" + Horas;
    }
    var Minutos = Hoje.getMinutes();
    if (Minutos < 10) {
        Minutos = "0" + Minutos;
    }
    var Segundos = Hoje.getSeconds();
    if (Segundos < 10) {
        Segundos = "0" + Segundos;
    }
    Elem.innerHTML = `Olá, hoje é: ${data}, ${Horas}:${Minutos}:${Segundos}`;
}
window.setInterval("Horario()", 1000);