var page = 1

// page2 le top 10

function top10() {
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:top;type:txt;nb:10')
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {

                console.log(data)
                document.getElementById('facts').innerHTML = ""
                for (let i = 0; i < 10; i++) {
                    document.getElementById('facts').innerHTML += "<p>" + data[i].fact + "</p>"
                }
            }
        )
        .catch(
            function(error) {
                alert("Erreur :" + error)
            }
        )
}

// fonction pour changer de page
var btop = document.getElementById('top')
btop.addEventListener('click', function() { affichageMoins() })

function affichageMoins() {
    page--
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=page:' + page + ';tri:top;type:txt;nb:10')
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                document.getElementById('facts').innerHTML = ""
                for (let i = 0; i < 10; i++) {
                    document.getElementById('facts').innerHTML += "<p>" + data[i].fact + "</p>"
                };
            }
        )
        .catch(
            function(error) {
                alert("Erreur :" + error)
            }
        )
}

var ntop = document.getElementById('next')
ntop.addEventListener('click', function() { affichagePlus() })

function affichagePlus() {
    page++
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=page:' + page + ';tri:top;type:txt;nb:10')
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                document.getElementById('facts').innerHTML = ""
                for (let i = 0; i < 10; i++) {
                    document.getElementById('facts').innerHTML += "<p>" + data[i].fact + "</p>"
                };
            }
        )
        .catch(
            function(error) {
                alert("Erreur :" + error)
            }
        )
}

// début instructions
top10();