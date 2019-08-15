'use strict';

//adding item to list
function addItem(item) {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        let inputedItem = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');
        $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${inputedItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
        `);
    });
}

//deleting item from list
function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        $(event.currentTarget).closest('li').remove();
    });

}

//checking & unchecking item on list
function checkItem() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

$(addItem);
$(deleteItem);
$(checkItem);