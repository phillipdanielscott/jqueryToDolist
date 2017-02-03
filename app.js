$( document ).ready(function() {
// console.log("this is working!")




////make the list draggable to any part of the screen
$(function() {
    $("#inputBox").draggable();
});





///append list item to the todo list

$("#submitButton").click(function(){
 var item = $('#TaskInput').val();
 $(".toDoList").append(item);
console.log("the submit button is working!");
})

$("#flip").click(function(){
console.log("heart button is working");
$('#inputBox').addClass('animated flipOutX');

})


















});
