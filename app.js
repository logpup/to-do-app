//adding jQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//submit when enter key pressed
document.addEventListener("keydown", submit);
function submit() {
  if (event.which === 13 || event.keycode ===13) {
    $("#myBtn").click();
  }
}

 function newElement () {
  //Add text to list
  var li = document.createElement("li");
  var inputValue = document.getElementById('input').value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  //Shake if input empty at submit
  //append item to ul if not and remove value in input
  if (inputValue==="") {
    e1 = $('#input');
    e1.addClass('shake');
    console.log($(e1));
    e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function (e) {
          e1.removeClass('shake');
      });
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";
  //Add span container for buttons
  var span = document.createElement("span");
  span.className = "buttons";
  li.appendChild(span);
  //Add checkbox button
  var checkbox = document.createElement("div");
  checkbox.className = "checkbox";
  span.appendChild(checkbox);
  //Add exit button
  var exit = document.createElement("div");
  exit.className = "exit";
  span.appendChild(exit);
  //Strikethrough when checked
  var checkboxes = document.getElementsByClassName("checkbox");
  var i;
  for (i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = function () {
      var item = this.parentElement.parentElement;
      item.classList.toggle("checked");
    }
  }
  //Delete when checked
  var exits = document.getElementsByClassName("exit");
  var i;
  for (i = 0; i < exits.length; i++) {
    exits[i].onclick = function () {
      var item = this.parentElement.parentElement;
      item.style.display = "none";
    }
  }
}

//change title to emoji's when mouseover
window.onload = function(){
  title.addEventListener('mouseover', function(ev){
    $('#title')[0].textContent = '🧖🏻‍♀️🏂🏻🤾🏻‍♀️🤸🏻‍♂️👩🏼‍🌾🤽🏻‍♀️';
  title.addEventListener('mouseout', function(ev){
    $('#title')[0].textContent = 'To Do List';
  });
});
}
