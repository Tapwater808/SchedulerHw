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
for (i = 0; i < 10; i++) {
    //row in container
    var row = $('<div>').addClass('row');
    //time block
    var time = $('<div>').addClass('hour col-md-2').text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    time.attr('data-time', moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    //task block
    var task = $('<textarea>').addClass('col-md-9');
    //save button
    var saveButton = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>');

    //append the container with the row
    $('.container').append(row);
    //append the row with the time block
    $(row).append(time);
    //after the timeblock display the task block
    $(time).after(task);
    //after the taskblock display the save button
    $(taskBlock).after(saveButton);

        // if else statement to determine the color of the row
    //now statement red
    if (now.isSame(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(task).addClass('present');
        //future green
    } else if (now.isBefore(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(task).addClass('future');
        //past grey
    } else if (now.isAfter(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(task).addClass('past');
    }
}
// Save click event to store data in local storage
$('.saveBtn').on('click', function() {

    localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())
});
