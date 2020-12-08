//Right now variable
var now = moment();
//Date variable
var current = now.format("MM DD YYYY");
//set date
$("currentDay").text("Today's Date: " + current);

$(document).read(function(){
//for loop with local storage displays
    hourArr = $('.hour').toArray();
    for (i = 0; i < hourArr.length; i++) {
        $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')));
    }
});

// For loop to print rows with timeblocks, taskblocks, and save buttons
for (i = 0; i < 9; i++) {
    //create a variable for the row
    var rowBlock = $('<div>').addClass('row');
    //create a variable for the time block
    var timeBlock = $('<div>').addClass('hour col-md-2').text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    timeBlock.attr('data-time', moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    //create a variable for the taskblock
    var taskBlock = $('<textarea>').addClass('col-md-9');
    //create a variable for the save block
    var saveButton = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>');

    // Placing content created above into the DOM in the right order.
    //append the container with the row
    $('.container').append(rowBlock);
    //append the row with the time block
    $(rowBlock).append(timeBlock);
    //after the timeblock display the task block
    $(timeBlock).after(taskBlock);
    //after the taskblock display the save button
    $(taskBlock).after(saveButton);