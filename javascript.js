// create add button
var btnParent = document.getElementById('text-area');
var addBtn = document.createElement('button');
var btnText = document.createTextNode('Add');
addBtn.appendChild(btnText  )
btnParent.appendChild(addBtn);
addBtn.className = 'btn'

// this fuction contains new list and delete button 
addBtn.onclick = () =>{
  // creating a new list
  var li = document.createElement('li');
  var inputValue = document.getElementById('input').value;
  var textValue = document.createTextNode(inputValue);
  li.appendChild(textValue);

  if(inputValue === ''){
    alert('Please type your list');
  }else{
    document.getElementById('ol').appendChild(li);
  }

// create delete button 
  document.getElementById('input').value = '';
  var span = document.createElement('span');
  var textNode = document.createTextNode('Delete');
  span.className = 'close';
  
  span.appendChild(textNode);
  li.appendChild(span);
// delete list when user click on delete
  var getClassName = document.getElementsByClassName('close');
  for(i = 0; i < getClassName.length; i++){
    getClassName[i].onclick = function(){
      var div = this.parentElement;
      div.style.display = 'none';
    }
  }
}