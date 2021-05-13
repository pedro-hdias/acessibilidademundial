var  percent = 70,
	 timePeriod = 100;

function getBar() {
 	var retBar = '';
 	for(i = 0; i < percent; i++) {
		  retBar += "|";
	 }
	 return retBar;
}

function progressBar() {
  if(percent < 100) {
    percent = percent + 1
    window.status = "Loading : " + percent + "%" + " " + getBar();
    setTimeout ("progressBar()", timePeriod);
  } else {
    window.status = "[JavaScriptSource] - tons of cut and paste JavaScript examples";
    document.body.style.display = "";
  }
}
progressBar();
