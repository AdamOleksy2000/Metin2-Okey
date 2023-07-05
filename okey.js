//var cards = ["y0.png", "y1.png", "y2.png", "y3.png", "y4.png", "y5.png", "y6.png", "y7.png", "r0.png", "r1.png", "r2.png", "r3.png", "r4.png", "r5.png", "r6.png", "r7.png", "b0.png", "b1.png", "b2.png", "b3.png", "b4.png", "b5.png", "b6.png", "b7.png"];
/*var cards = ["okey.png"];

var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");

var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");
var c12 = document.getElementById("c12");
var c13 = document.getElementById("c13");
var c14 = document.getElementById("c14");
var c15 = document.getElementById("c15");

var c16 = document.getElementById("c16");
var c17 = document.getElementById("c17");
var c18 = document.getElementById("c18");
var c19 = document.getElementById("c19");
var c20 = document.getElementById("c20");
var c21 = document.getElementById("c21");
var c22 = document.getElementById("c22");
var c23 = document.getElementById("c23");

c0.addEventListener("click", function() {hideCard(0); });
c1.addEventListener("click", function() {hideCard(1); });
c2.addEventListener("click", function() {hideCard(2); });
c3.addEventListener("click", function() {hideCard(3); });
c4.addEventListener("click", function() {hideCard(4); });
c5.addEventListener("click", function() {hideCard(5); });
c6.addEventListener("click", function() {hideCard(6); });
c7.addEventListener("click", function() {hideCard(7); });

c8.addEventListener("click", function() {hideCard(8); });
c9.addEventListener("click", function() {hideCard(9); });
c10.addEventListener("click", function() {hideCard(10); });
c11.addEventListener("click", function() {hideCard(11); });
c12.addEventListener("click", function() {hideCard(12); });
c13.addEventListener("click", function() {hideCard(13); });
c14.addEventListener("click", function() {hideCard(14); });
c15.addEventListener("click", function() {hideCard(15); });

c16.addEventListener("click", function() {hideCard(16); });
c17.addEventListener("click", function() {hideCard(17); });
c18.addEventListener("click", function() {hideCard(18); });
c19.addEventListener("click", function() {hideCard(19); });
c20.addEventListener("click", function() {hideCard(20); });
c21.addEventListener("click", function() {hideCard(21); });
c22.addEventListener("click", function() {hideCard(22); });
c23.addEventListener("click", function() {hideCard(23); });


function hideCard(nr) {
  var cardElement = $("#c" + nr);
  cardElement.toggleClass("hidden");
}

// Dodajemy obsługę kliknięcia i zmiany kursora dla wszystkich kart
for (var i = 0; i < cards.length; i++) {
  var cardElement = document.getElementById("c" + i);
  cardElement.classList.add("card");

  cardElement.addEventListener("click", function () {
    var cardNumber = parseInt(this.id.substring(1));
    hideCard(cardNumber);
  });
}*/
document.addEventListener("DOMContentLoaded", function() {
  //var cards = ["okey.png"];

  var cardElements = document.querySelectorAll(".yellow_board > div, .red_board > div, .blue_board > div");

  cardElements.forEach(function(cardElement, index) {
    cardElement.classList.add("card");

    cardElement.addEventListener("click", function() {
      if (cardElement.classList.contains("covered")) {
        uncoverCard(index);
      } else {
        coverCard(index);
      }
    });
  });

  function coverCard(nr) {
    var okey = "url(images/okey.png)";
    cardElements[nr].style.backgroundImage = okey;
    cardElements[nr].classList.add("covered");
  }

  function uncoverCard(nr) {
    cardElements[nr].style.backgroundImage = "";
    cardElements[nr].classList.remove("covered");
  }
    var refreshButton = document.getElementById("refreshButton");

  // Dodajemy nasłuchiwanie na kliknięcie przycisku
  refreshButton.addEventListener("click", function() {
    location.reload(); // Odświeżanie strony
})
})