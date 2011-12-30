$(function() {
  $('#add_todo').submit(function() {
    appendTodo();
    return false;
  });

  bindComplete();

  bindUnComplete();
});

function bindComplete(elements) {
  $('.todos input[type="checkbox"]').each(function() {
    $(this).click(function() {
      var input = $(this);
      var parent = input.parent().parent();
      parent.slideToggle('fast', function() {
        $(this).appendTo('.completed_todos').slideToggle();
      });
    });
  });
}

function bindUnComplete(elements) {
  $('.completed_todos input[type="checkbox"]').each(function() {
    $(this).click(function() {
      var input = $(this);
      var parent = input.parent().parent();
      parent.slideToggle('fast', function() {
        $(this).appendTo('.todos').slideToggle();
      });
    });
  });
}

function appendTodo() {
  var todoInput = $('#todo');
  if(todoInput.val()) {
    var div = $('<div/>', {class: 'todo_item'});
    var p = $('<p/>');
    var input = $('<input/>', {
      type: 'checkbox',
    });
    var span = $('<span/>', {text: todoInput.val()});

    input.appendTo(p);
    span.appendTo(p);
    p.appendTo(div);
    div.appendTo('.todos');
    todoInput.val('');
  }
}
