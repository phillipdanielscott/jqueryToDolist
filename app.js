$( document ).ready(function() {
// console.log("this is working!")




////make the list draggable to any part of the screen
$(function() {
    $("#inputBox").draggable();
});





///append list item to the todo list

$("#submitButton").click(function(){
 var item = $('#TaskInput').val();
 $("#toDoList").append(item);
console.log("the submit button is working!");
document.getElementById('TaskInput').value='';
})

///show the Todo List
$("#flip").click(function(){
console.log("heart button is working");
$('#inputBox').addClass('animated flipOutX');
$('.hidden').removeClass('hidden');
$('#toDoList').addClass('animated bounceIn');
})


$("#TaskInput").keyup(function(event){
  if(event.keyCode === 13){
    var item = $('#TaskInput').val();
    $("#toDoList").append(item);
    document.getElementById('TaskInput').value='';
console.log("enter was pressed");
  }
})





















});
