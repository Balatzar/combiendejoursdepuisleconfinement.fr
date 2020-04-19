(function () {
  var daysSince = Math.floor(
    ((new Date("2020/03/17") - new Date()) / 1000 / 60 / 60 / 24) * -1
  );
  document.querySelector(".js-displayText").innerHTML =
    "<span class='days-since'>" +
    daysSince +
    "</span> jours depuis le début du confinement";

  var daysRemaining = Math.floor(
    (( new Date() - new Date("2020/05/11")) / 1000 / 60 / 60 / 24) * -1
  );
  document.querySelector(".js-displaySecondaryText").innerHTML =
    "Jours de confinement prévus : <span class='days-remain'>" +
    daysRemaining +
    "</span>";
    
  document.querySelector(".js-share button").addEventListener("click", function() {
    document.querySelector(".js-share p").innerHTML = "L'URL de cette page a ete copiee !"
   })
})();
