$("#adTodo").click(function () {
    const inputTodo = $("input").val();
    $("#todolist").append("<li><input type='checkbox'>" + inputtodo + "</li>");

    $("input").val("");
});