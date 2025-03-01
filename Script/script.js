let buttons = document.querySelectorAll('.complete-btn');
let taskNumberElement = document.getElementById('task-number');
let completedTasksElement = document.getElementById('completed-tasks');

for (let button of buttons) {
    button.addEventListener('click', function () {
        alert('Board Update Successfully');

        let convertedTaskNum = parseInt(taskNumberElement.innerText);
        let convertedCompletedTasks = parseInt(completedTasksElement.innerText);


        button.disabled = true;
        button.style.backgroundColor = "#ccc";
        button.style.cursor = "not-allowed";

        if (convertedTaskNum > 1) {
            convertedTaskNum--;
            convertedCompletedTasks++;
            taskNumberElement.innerText = convertedTaskNum;
            completedTasksElement.innerText = convertedCompletedTasks;
        }
        else if (convertedTaskNum === 1) {
            convertedTaskNum--;
            convertedCompletedTasks++;
            taskNumberElement.innerText = convertedTaskNum;
            completedTasksElement.innerText = convertedCompletedTasks;

            alert('No tasks left!');
        }
    });
}

// Blogs page button

document.getElementById('to-blog-page').addEventListener('click', function () {
    window.location.href = 'Blogs.html';
})





