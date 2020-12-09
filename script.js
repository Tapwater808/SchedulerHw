//Right now variable
var now = moment();
//Date variable
var current = now.format("MM DD YYYY");
//set date
$("currentDay").text("Today's Date: " + current);

$(document).ready(function() {
//for local storage
    hourArr = $('.hour').toArray();
    for (i = 0; i < hourArr.length; i++) {
        $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')));
    }
});

for (i = 0; i < 14; i++) {
    //For loop variables
    var row = $('<div>').addClass('row');
    var time = $('<div>').addClass('hour col-md-2').text(moment('6:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    time.attr('data-time', moment('6:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    var task = $('<textarea>').addClass('col-md-9');
    var saveButton = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>');

    //append the container with time, text and button
    $('.container').append(row);
    $(row).append(time);
    $(time).after(task);
    $(task).after(saveButton);

    //statement colors
            //now red
        if (now.isSame(moment('6:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
            $(task).addClass('present');
            //future green
        } else if (now.isBefore(moment('6:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
            $(task).addClass('future');
            //past grey
        } else if (now.isAfter(moment('6:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
            $(task).addClass('past');
        }
}
// Save click event to store data in local storage
$('.saveBtn').on('click', function() {

    localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())
});
