$(function() {
  $('#add_todo').submit(function() {
    appendTodo();
    saveTaskRemotely();
    return false; // disable default form action
  });

  bindComplete($('.todos input[type="checkbox"]'));

  bindUnComplete($('.completed_todos input[type="checkbox"]'));
});

function bindComplete(elements) {
  elements.each(function() {
    $(this).click(function() {
      var input = $(this);
      var parent = input.parent().parent();
      parent.slideToggle('fast', function() {
        input.unbind(); // remove all events binding
        bindUnComplete(input);
        $(this).appendTo('.completed_todos').slideToggle();
      });
    });
  });
}

function bindUnComplete(elements) {
  elements.each(function() {
    $(this).click(function() {
      var input = $(this);
      var parent = input.parent().parent();
      parent.slideToggle('fast', function() {
        input.unbind();
        bindComplete(input);
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
  }
}

function saveTaskRemotely() {
  var todoInput = $('#todo');
  var value = todoInput.val();
  todoInput.val('');
  if(value) {
    $.ajax({
      url: '/tasks',
      type: 'post',
      data: "task[title]=" + value,
      success: function() {
        console.log('success');
      },
      error: function() {
        console.log('error');
      }
    });
  }
}


















