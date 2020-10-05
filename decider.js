const optionInput = document.getElementById('option');
const addOptionBtn = document.getElementById('add-option');
const optionList = document.querySelector('.collection');
const decideBtn = document.getElementById('decide');
const outputArea = document.getElementById('output');

let options = [];

// load all event listeners
loadEventListeners();

function loadEventListeners(){
  // add task event
  addOptionBtn.addEventListener('click', addTask);

  // remove task event
  optionList.addEventListener('click', removeTask);

  // decide event
  decideBtn.addEventListener('click', chooseOption);
}

// add task function
function addTask(event){
  if(optionInput.value === ''){
    alert('add a task first');
  } else {
    options.push(optionInput.value);
    // create li element
    const li = document.createElement('li');
    // add a class
    li.className = 'collection-item';
    // create text node and append to ui
    li.appendChild(document.createTextNode(optionInput.value));
    // create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);

    // append the li to the ul
    optionList.appendChild(li);

    // clear input
    optionInput.value = '';
  }
  event.preventDefault();
}

// remove task function
function removeTask(event){
  if(event.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure you want to remove task?')){
      event.target.parentElement.parentElement.remove();
    }
  }
}

function chooseOption(){
  outputArea.hidden = false;
  outputArea.innerHTML += `${options[Math.floor(Math.random() * options.length)]}`;
  decideBtn.style.display = 'none';
}