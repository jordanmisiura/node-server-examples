function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	 //document.getElementById("demo").innerHTML = this.responseText;
	}
	};
	xhttp.open("GET", "http://localhost:8080/cspire", true);
	xhttp.send();
}