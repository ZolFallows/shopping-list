'use strict';

// generate html
function renderNewItem(item){
  return `
  <li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
  `;
}

// collect input item from user 
function input(){
  $('#js-shopping-list-form').submit(function(event){
      event.preventDefault();
      const text = $('#shopping-list-entry').val();
      $('ul').append(renderNewItem(text));
      this.reset();
  });
}

// toggle item to check and uncheck
function checkItem(){
  $('ul').on('click', '.shopping-item-toggle', event => {
    $(event.currentTarget).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
  });
}

// Delete item from the shopping list
function deleteItem(){
  $('ul').on('click', '.shopping-item-delete', event => {
    $(event.currentTarget).closest('li').remove();
  });
}

function main(){
  input();
  deleteItem();
  checkItem();
}

$(main);