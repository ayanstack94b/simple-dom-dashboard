// current time
function getCurrentTime() {
    let now = new Date();
    const currentTime = now.toLocaleTimeString('en-US',
        { hour: '2-digit', minute: '2-digit' ,second: '2-digit'});
    return currentTime;
}

let buttons = document.querySelectorAll('.complete-btn');
let taskNumberElement = document.getElementById('task-number');
let completedTasksElement = document.getElementById('completed-tasks');
let newElement = document.getElementById('displayed-element');



for (let button of buttons) {
    button.addEventListener('click', function () {
        alert('Board Update Successfully');

        let convertedTaskNum = parseInt(taskNumberElement.innerText);
        let convertedCompletedTasks = parseInt(completedTasksElement.innerText);

        button.disabled = true;
        button.style.backgroundColor = "gray";
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

            alert('congrats!!! You have completed all the current tasks');

        }

        // new element

        let title = document.querySelector('.title').innerText;
        let date = document.querySelector('.dynamic-date').innerText;

        if (newElement) {
            const p = document.createElement('p');
            p.classList.add('dom-style');
            p.innerText = `You have completed the task: ${title} | Deadline: ${date} | Completed at: ${getCurrentTime()}`;
            
            newElement.appendChild(p);
        }
    });
}

// Clear History Button
document.getElementById('clear-history-btn').addEventListener('click', function () {
    const displayedElement = document.getElementById('displayed-element');

    if (displayedElement) {
        displayedElement.innerHTML = '';
    }
})

// Blogs page button

document.getElementById('to-blog-page').addEventListener('click', function () {
    window.location.href = 'Blogs.html';
})

// Random Color Button
document.getElementById('change-clr-btn').addEventListener('click', function () {
    let randomNum = Math.floor(Math.random() * 16777215);
    randomNum = '#' + randomNum.toString(16);
    document.body.style.backgroundColor = randomNum;
})

// set current date
function updateDate() {
    let now = new Date();
    let formattedDate = now.toLocaleDateString('en-US', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    let dateElement = document.getElementById('date');
    dateElement.innerText = formattedDate;
    dateElement.style.fontWeight = "bold";
}

updateDate();


