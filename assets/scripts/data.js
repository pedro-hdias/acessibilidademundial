var now = new Date();
var mName = now.getMonth() +1 ; 
var dName = now.getDay() +1; 
var dayNr = now.getDate(); 
var yearNr=now.getYear(); 
if(dName==1) {Day = "Domingo";} 
if(dName==2) {Day = "Segunda-feira";} 
if(dName==3) {Day = "Ter&#231;a-feira";} 
if(dName==4) {Day = "Quarta-feira";} 
if(dName==5) {Day = "Quinta-feira";} 
if(dName==6) {Day = "Sexta-feira";} 
if(dName==7) {Day = "S&aacute;bado";} 
if(mName==1){Month = "01";} 
if(mName==2){Month = "02";} 
if(mName==3){Month = "03";} 
if(mName==4){Month = "04";} 
if(mName==5){Month = "05";} 
if(mName==6){Month = "06";} 
if(mName==7){Month = "07";} 
if(mName==8){Month = "08";} 
if(mName==9){Month = "09";} 
if(mName==10){Month = "10";} 
if(mName==11){Month = "11";} 
if(mName==12){Month = "12";} 
if(yearNr < 2000) {Year = 1900 + yearNr;} else {Year = yearNr;} 
var todaysDate =(" " + Day + " " + dayNr + "/" + Month +  "/" + Year); 