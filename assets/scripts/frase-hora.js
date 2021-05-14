var frase = document.getElementById("frase");

function frases() {
    var Digital = new Date();
    var hours = Digital.getHours();
    if (hours >= 5 && hours <= 11) {
        var frase1 = "Bom dia! Seja bem-vindo (A) à página oficial <STRONG>ACESSIBILIDADEMUNDIAL</STRONG>";
    } else
    if (hours == 12) {
        var frase1 = 'Meio dia, Seja bem-vindo (A), muito obrigado pela visita!';
    } else
    if (hours >= 13 && hours <= 17) {
        var frase1 = 'Boa tarde, ficamos felizes de vê-lo (A) por aqui!';
    } else
    if (hours >= 18 && hours <= 20) {
        var frase1 = 'Que noite linda! Aproveite a brisa e ouça uma boa música conosco!';
    } else
    if (hours >= 21 && hours <= 23) {
        var frase1 = 'Que ótimo, você por aqui!';
    } else {
        var frase1 = 'Seja bem-vindo (A), estamos felizes em ter-te aqui pouco antes de ir para a cama, como podemos ajudar?';
    }
}
frase.innerHTML = frase1;
window.setInterval("frases()", 60000);