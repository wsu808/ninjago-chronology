//stwórz id="ninjaquote" w pliku html


var quotes = ["Potężna broń jest jedynie przedłużeniem poteżnego umysłu. Jeśli umysł nie działa, broń też nie będzie.<br>~ Wu","Loyd: Ale tato, nie jestem zielonym ninją, nie dam rady.<br>Garmadon: A powiedz mi od kiedy to kolor określa człowieka. Ty sam dobrze wiesz kim jesteś. Nie możesz się poddać.","Przysięgi wychodzą już z mody bo zbyt łatwo jest coś obiecać.<br>~ Jay","Ci którzy nie potrafią zmienić siebie, niczego nie zmienią.<br>~ Loyd"];




function NinjaQuote() {
	var randNum = Math.floor(Math.random()*(quotes.length));
	document.getElementById('ninjaquote').innerHTML = quotes[randNum];
}