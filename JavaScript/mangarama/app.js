// bubbling
// even though the event listener is not actually attached to the buttons, the event is associated with the ul
const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', e => {
  if(e.target.className == 'delete'){
    //grab the ul
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', e => {
  e.preventDefault(); // no refresh
  const value = addForm.querySelector('input[type="text"]').value;

  // create elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add content
  bookName.textContent = value;
  bookName.classList.add('name');
  deleteBtn.textContent = 'delete';
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  addForm.querySelector('input[type="text"]').value = '';
});

// hide books
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', e => {
  if(hideBox.checked){
    list.style.dislay = "none";
  } else {
    list.style.display = "initial";
  }
});

// filter books
const searchbar = document.forms['search-books'].querySelector('input');

searchbar.addEventListener('keyup', e => {
  const input = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');

  Array.from(books).forEach(book => {
    const name = book.firstElementChild.textContent;
    if(name.toLowerCase().indexOf(input) >= 0){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });

});

// tab content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', e => {
  if(e.target.tagName == "LI"){
    // grabs 'data-target' element
    const targetPanel = document.querySelector(e.target.dataset.target);
    
    panels.forEach(panel => {
      if(panel == targetPanel){
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});
