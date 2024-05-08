$(document).ready(function() {
    flatpickr("#end-time", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    });

    $('#add-task-btn').click(function() {
        var taskInput = $('#task-input').val().trim();
        var endDateTimePicker = $('#end-time').val().trim();
        var prioritySelect = $('#priority').val();

        if (taskInput !== '' && moment(endDateTimePicker, 'YYYY-MM-DD HH:mm').isValid()) {
            var taskItem = $('<li>').html('<input type="checkbox"><span>' + taskInput + '</span><span class="finish-time">' + moment(endDateTimePicker).format('YYYY-MM-DD HH:mm') + '</span><span class="task-priority">' + prioritySelect + '</span><button class="delete-button">Delete</button>');
            $('#task-list').append(taskItem);
            checkTaskTime(taskItem);
            $('#task-input, #end-time').val('');
            $('#priority').val('low');
        }
    });

    $(document).on('click', '.delete-button', function() {
        $(this).closest('li').remove();
    });

    $('#sort-tasks-btn').click(function() {
        var taskList = $('#task-list');
        var tasks = taskList.children().toArray();

        tasks.sort(function(a, b) {
            var priorityOrder = { high: 3, medium: 2, low: 1 };
            var priorityA = $(a).find('.task-priority').text();
            var priorityB = $(b).find('.task-priority').text();

            return priorityOrder[priorityB] - priorityOrder[priorityA];
        });

        $.each(tasks, function(index, task) {
            taskList.append(task);
        });
    });

    function checkTaskTime(taskItem) 
    {
        var finishTimeSpan = taskItem.find('.finish-time');
        var finishTime = moment(finishTimeSpan.text(), 'YYYY-MM-DD HH:mm');
        var currentTime = moment();

        if (finishTime.isBefore(currentTime)) {
            finishTimeSpan.text("Time's up").css('color', 'red');
        } else {
            var timeDifference = finishTime.diff(currentTime);
            setTimeout(function() {
                checkTaskTime(taskItem);
            }, timeDifference);
        }
    }

    $('#add-task-btn').click(function() 
    {
        var taskInput = $('#task-input').val().trim();
        var endDateTimePicker = $('#end-time').val().trim();
        var prioritySelect = $('#priority').val();

        if (taskInput !== '' && moment(endDateTimePicker, 'YYYY-MM-DD HH:mm').isValid()) 
        {
            var taskData = {
                name: taskInput,
                endTime: endDateTimePicker,
                priority: prioritySelect
            };

            $.ajax({
                url: '/tasks',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(taskData),
                success: function(response) {
                    // Handle successful creation of task
                    console.log('Task created successfully:', response);
                },
                error: function(xhr, status, error) {
                    // Handle error
                    console.error('Error creating task:', error);
                }
            });
        }
    });
});

