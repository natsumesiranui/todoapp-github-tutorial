$("#adTodo").click(function () {
    const inputTodo = $("input").val();
    $("#todolist").append("<li><input type='checkbox'>" + inputtodo + "</li>");

    $("input").val("");
});


$(document).on("change","input[type=check]",function(){
    if($(this).is(":checked")){
        $(this).parent().css("text-decoration","line-through");
    } else {
        $(this).parent().css("text-decoration","none");
    }

});