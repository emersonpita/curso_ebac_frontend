$(document).ready(function() {
    $("#task-form").submit(function(e) {
      e.preventDefault();
      let task = $("#task-input").val();
      $("#task-list").append("<li><input type='checkbox'>" + task + "</li>");
      $("#task-input").val("");
    });
  
    $("#task-list").on("click", "input[type='checkbox']", function() {
      $(this).parent().toggleClass("completed");
    });
});