// page3 les 10 derniers

function last() {
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:last;type:txt;nb:10')
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                for (let i = 0; i < 10; i++) {
                    document.getElementById('lasts').innerHTML += "<p>" + data[i].fact + "</p>"
                }
            }
        )
        .catch(
            function(error) {
                alert("Erreur :" + error)
            }
        )
}

last()