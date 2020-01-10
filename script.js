// page1 

function chucknorris() {
    var xhr = new XMLHttpRequest()
    xhr.onload = function() {
        document.getElementById("fact").innerHTML = JSON.parse(xhr.response)[0].fact
    }
    xhr.open('GET', 'http://jihane.fr/ajax/chucknorris.php/get?data=tri:alea;type:txt;nb:1')
    xhr.send();
}