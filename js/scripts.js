$(function() {
  $(".kittenClick").click(function() {
    $("#hideKitten").toggle();
    $("#showKitten").toggle();
  });
  $(".buildingClick").click(function() {
    $("#hideBuilding").toggle();
    $("#showBuilding").toggle();
  });
});
