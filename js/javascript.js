function submitFunction() {
    window.open('mailto:contact@this-site.com?subject=Hello&body='+document.getElementById("textbody").value + ' from ' + document.getElementById("name").value + ' at ' + document.getElementById("email").value);
}

document.getElementById("send").onclick = function() {submitFunction()};
