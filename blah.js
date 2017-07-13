$(document).ready(function() {

  $("input").keyup(function(){

  console.log($(this).val());
});

  var image1 = "file:///Users/nicholasborbe/Desktop/jquery-intro-lecture-notes/pink-phone.jpg";
  var image2 = "file:///Users/nicholasborbe/Desktop/jquery-intro-lecture-notes/scam-likely-phone.jpg";

// $(".theButton").click(function(){
  // if($(this).hasClass("blue")){
  //     $(this).removeClass("blue");
  //     $(this).addClass("red");
  // }else{
  //   $(this).removeClass("red");
  //   $(this).addClass("blue");
  // }
  // ^ this is my own toggleClass method
  // fortunately, this happens often enough that JQuery has a function for this
$(".theButton").click(function(){


// $(".first-li").text("<ul><li> Yay, Ironhack! Coding is cool! </li></ul>")
// .text will interpret everything you add as text and inject it into
// the contents of the tag

// $(".first-li").html("<ul><li> Yay, Ironhack! Coding is cool! </li></ul>")
// .html will allow you to inject new html elements into existing ones



var inputContents = $("input").val();
var thingToAdd = "<li>"+inputContents+"</li>"

// append adds to the bottom of selected element
$("#my-ul").append(thingToAdd);

// $("#my-ul").empty();
// .empty will empty the contents of the selected element
// the element will still exist on the page but will have no content


// prepend adds to the top
// $("#my-ul").prepend(thingToAdd);


// $("#my-ul li:first").remove();







  $(this).toggleClass("blue");
  $(this).toggleClass("red");

  console.log($(".phoneImage").prop("src"));

  if($(".phoneImage").prop("src")===image1){

      $(".phoneImage").prop("src",image2);
  }
  else{
      $(".phoneImage").prop("src",image1);
  }




});


});
