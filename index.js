(function () {
  var daysSince = Math.floor(
    ((new Date("2020/03/17") - new Date()) / 1000 / 60 / 60 / 24) * -1
  );
  document.querySelector(".js-displayText").innerHTML =
    "Le confinement dure depuis <span class='days-since'>" +
    daysSince +
    "</span> jours";
})();
