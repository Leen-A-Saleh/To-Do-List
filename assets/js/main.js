function addTask() {
    var input = document.getElementById('taskInput').value.trim();
    var ul = document.getElementById('taskList');
    
    if (input === '') {
      showError('Please enter a task.');
      return;
    }
    
    var li = document.createElement('li');
    
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
      li.classList.toggle('completed');
    };
    
    var span = document.createElement('span');
    span.textContent = input;
    
    var updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.onclick = function() {
      var newTask = prompt('Enter new task:');
      if (newTask !== null && newTask.trim() !== '') {
        span.textContent = newTask.trim();
      }
    };
    
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
      ul.removeChild(li);
    };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(updateBtn);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    
    clearInput();
  }
  
  function showError(message) {
    var errorDiv = document.createElement('div');
    errorDiv.textContent = message;
    errorDiv.classList.add('error');
    document.body.insertBefore(errorDiv, document.querySelector('.container'));
    
    setTimeout(function() {
      errorDiv.remove();
    }, 3000);
  }
  
  function clearInput() {
    document.getElementById('taskInput').value = '';
  }
  