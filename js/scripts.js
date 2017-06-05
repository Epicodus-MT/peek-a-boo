$(function() {
  var linx = ["kitten", "building"];
  console.log("got here");
  linx.forEach(function(link){
    $("." + link).click(function(){
      $("#hide" + link).toggle();
      $("#show" + link).toggle();
    });
  });
});
