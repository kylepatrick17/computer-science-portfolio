var todo = document.getElementById('todo'),
    form = document.getElementById('form'),
    field = document.getElementById('field'),
    edit = document.getElementById('edit'),
    deleteAll = document.getElementById('deleteAll');
    //Delclares variables

// var idKeeper = 0;

form.addEventListener( 'submit', function(evt) {
  var text = field.value;
   todo.innerHTML += '<div>' + text + '</div>';
  field.value="";
  evt.preventDefault();
}, false);

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  tar.parentNode.removeChild(tar);
  //removes to do item when you click 
  evt.preventDefault();
}, false);
deleteAll.addEventListener('click',function(evt) {
  todo.innerHTML="";
});
  